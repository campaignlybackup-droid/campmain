/**
 * Campaignly Media: lead capture web app.
 *
 * Receives JSON from the website forms, appends a row to a Google Sheet tab per form type,
 * and emails the lead. Setup steps are in the project README ("Forms: Google Apps Script").
 *
 * Script properties (Project Settings > Script properties):
 *   SHEET_ID      ID of the Google Sheet (the long string in its URL)
 *   NOTIFY_EMAIL  Address that receives lead emails (match leadNotificationEmail in site.config.ts)
 */

var FORM_TABS = {
  apply: "Apply to Partner",
};

var FIELD_ORDER = {
  apply: ["name", "email", "company", "website", "industry", "revenue", "goal"],
};

var ATTRIBUTION_FIELDS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "landing_page", "referrer",
];

var MIN_ELAPSED_MS = 3000;
var MAX_FIELD_LENGTH = 2000;

function doPost(e) {
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    var formType = String(body.formType || "");
    if (!FORM_TABS[formType]) return json_({ ok: false, error: "unknown_form" });

    // Bot checks mirrored from the client. Respond ok so bots learn nothing.
    if (Number(body.elapsedMs || 0) < MIN_ELAPSED_MS) return json_({ ok: true });

    var fields = body.fields || {};
    var order = FIELD_ORDER[formType];
    for (var i = 0; i < order.length; i++) {
      if (!clean_(fields[order[i]])) return json_({ ok: false, error: "missing_" + order[i] });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clean_(fields.email))) return json_({ ok: false, error: "invalid_email" });

    if (isDuplicate_(formType, clean_(fields.email))) return json_({ ok: true });

    var attribution = body.attribution || {};
    var row = [new Date(), FORM_TABS[formType]]
      .concat(order.map(function (k) { return clean_(fields[k]); }))
      .concat([clean_(body.pageUrl)])
      .concat(ATTRIBUTION_FIELDS.map(function (k) { return clean_(attribution[k]); }));

    appendRow_(formType, row);
    notify_(formType, order, fields, body.pageUrl, attribution);
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: "server_error" });
  }
}

/** Health check: open the web app URL in a browser to confirm it is deployed. */
function doGet() {
  return json_({ ok: true, service: "campaignly-forms" });
}

function appendRow_(formType, row) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var ss = SpreadsheetApp.openById(prop_("SHEET_ID"));
    var name = FORM_TABS[formType];
    var sheet = ss.getSheetByName(name) || ss.insertSheet(name);
    if (sheet.getLastRow() === 0) {
      var header = ["Timestamp", "Form"].concat(FIELD_ORDER[formType]).concat(["Page URL"]).concat(ATTRIBUTION_FIELDS);
      sheet.appendRow(header);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }
}

function notify_(formType, order, fields, pageUrl, attribution) {
  var to = prop_("NOTIFY_EMAIL");
  var lines = order.map(function (k) { return k + ": " + clean_(fields[k]); });
  lines.push("", "Page: " + clean_(pageUrl));
  ATTRIBUTION_FIELDS.forEach(function (k) {
    if (attribution[k]) lines.push(k + ": " + clean_(attribution[k]));
  });
  MailApp.sendEmail({
    to: to,
    replyTo: clean_(fields.email),
    subject: "New lead: " + FORM_TABS[formType] + " (" + clean_(fields.company || fields.website) + ")",
    body: lines.join("\n"),
  });
}

/** Same email and form within 10 minutes is treated as a double submit. */
function isDuplicate_(formType, email) {
  var cache = CacheService.getScriptCache();
  var key = formType + ":" + email.toLowerCase();
  if (cache.get(key)) return true;
  cache.put(key, "1", 600);
  return false;
}

/** Trims, limits length and neutralises spreadsheet formula injection. */
function clean_(v) {
  var s = String(v === undefined || v === null ? "" : v).trim().slice(0, MAX_FIELD_LENGTH);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function prop_(key) {
  var v = PropertiesService.getScriptProperties().getProperty(key);
  if (!v) throw new Error("Missing script property " + key);
  return v;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
