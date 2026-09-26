"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "idresizer-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage unavailable (e.g. blocked); show the banner anyway
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setVisible(false);
  };

  const decline = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "declined");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-4 shadow-soft backdrop-blur">
      <div className="container-page flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-xs text-slate-600 sm:text-sm">
          We use cookies for basic analytics and to show relevant ads. See our{" "}
          <Link href="/privacy-policy" className="text-brand-600 underline">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={decline}
            className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:border-slate-300"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
