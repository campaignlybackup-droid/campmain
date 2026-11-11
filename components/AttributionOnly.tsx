"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/analytics";

/** When no trackers are configured, still capture UTM parameters for form submissions. */
export function AttributionOnly() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
