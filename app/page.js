import Link from "next/link";
import PhotoTool from "@/components/PhotoTool";
import FAQ from "@/components/FAQ";
import AdSlot from "@/components/AdSlot";
import { TOOLS } from "@/lib/tools";

const POPULAR_TOOLS = TOOLS.filter((t) =>
  ["us-visa-600x600", "dv-lottery", "us-green-card", "uk-passport-35x45", "uk-driving-license", "uk-railcard"].includes(t.slug)
);

const BADGES = [
  { icon: "⚡", label: "Fast", desc: "Get your perfect photo in seconds" },
  { icon: "🔒", label: "Secure & Private", desc: "Your photos are safe with us" },
  { icon: "💯", label: "100% Free", desc: "No hidden charges, always free" },
  { icon: "📱", label: "Works on All Devices", desc: "Desktop, tablet & mobile friendly" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-glow">
        <div className="container-page grid items-center gap-10 py-16 sm:py-20 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600 shadow-sm">
              Fast · Easy · Free
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
              Resize & Crop Your Photos
              <br />
              for <span className="text-brand-600">Official Documents</span>
            </h1>
            <p className="mt-4 max-w-md text-slate-500">
              Quick and easy online tools to resize, crop and prepare your
              photos for US &amp; UK visa, passport, driving license,
              railcard and more. No downloads. No signup.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/tools" className="btn-primary">
                Explore All Tools
              </Link>
              <Link href="#tool" className="btn-secondary">
                Try It Now
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-brand-100/70 blur-2xl" />
            <div className="relative flex h-48 w-40 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-b from-brand-100 to-brand-50 shadow-soft sm:h-60 sm:w-48">
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="9" r="4" stroke="#5B2FD4" strokeWidth="1.6" />
                <path d="M4 20c1.4-4 4.4-6 8-6s6.6 2 8 6" stroke="#5B2FD4" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <span className="absolute -left-2 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600 shadow-soft">
              ↘ Resize
            </span>
            <span className="absolute -right-1 top-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600 shadow-soft">
              ⌐ Crop
            </span>
            <span className="absolute bottom-3 right-0 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-mint shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" /> Perfect Size &amp; Ratio
            </span>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="border-y border-slate-100 bg-white">
        <div className="container-page grid grid-cols-2 gap-4 py-8 sm:grid-cols-4">
          {BADGES.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg">
                {b.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">{b.label}</p>
                <p className="text-xs text-slate-500">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="py-6">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>

      {/* Interactive tool */}
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            Try it now
          </p>
          <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
            Resize your photo in your browser
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            All processing happens locally on your device using your
            browser's Canvas engine — nothing is ever uploaded.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-4xl">
          <PhotoTool />
        </div>
      </section>

      <div className="container-page pb-6">
        <AdSlot label="Advertisement" size="banner" />
      </div>

      {/* Tool grid */}
      <section id="tools" className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Our Tools
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
              Popular Photo Tools
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Choose a tool to get started. Each tool is designed for
              specific photo requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_TOOLS.map((tool) => (
              <div key={tool.slug} className="card flex flex-col p-6">
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{tool.flag}</span>
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-600">
                    {tool.widthPx}×{tool.heightPx}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">{tool.name}</h3>
                <p className="mt-1 flex-1 text-sm text-slate-500">{tool.short}</p>
                <Link href={tool.route} className="btn-primary mt-4 w-full">
                  Use Tool
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/tools" className="btn-secondary">
              View All {TOOLS.length} Tools
            </Link>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 rounded-2xl bg-white p-6 shadow-card sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">⚡</span>
              <div>
                <p className="text-sm font-semibold text-navy">Fast &amp; Easy</p>
                <p className="text-xs text-slate-500">Perfect photo in seconds</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">💯</span>
              <div>
                <p className="text-sm font-semibold text-navy">100% Free</p>
                <p className="text-xs text-slate-500">No hidden charges, always</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">🔒</span>
              <div>
                <p className="text-sm font-semibold text-navy">Secure &amp; Private</p>
                <p className="text-xs text-slate-500">Your photos are safe with us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-6">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>

      <FAQ />

      <div className="container-page pb-16">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>
    </>
  );
}
