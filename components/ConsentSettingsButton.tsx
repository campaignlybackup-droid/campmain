"use client";

export function ConsentSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("cm:consent-settings"))}
      className="link-quiet hover:text-ink"
    >
      Cookie settings
    </button>
  );
}
