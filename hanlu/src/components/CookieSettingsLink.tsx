"use client";
export default function CookieSettingsLink({ label }: { label: string }) {
  return (
    <button
      className="text-sm text-ink-2 hover:text-seal"
      onClick={() => window.dispatchEvent(new CustomEvent("hanlu:open-consent"))}
    >
      {label}
    </button>
  );
}
