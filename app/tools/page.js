import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { TOOLS } from "@/lib/tools";

export const metadata = {
  title: "All Photo Tools — US & UK Document Photo Resizers",
  description:
    "Browse every free photo tool on idresizer.com: US visa, US passport, USPS appointment, UK passport, UK DVLA driving license, and UK railcard photo resizers.",
};

export default function ToolsPage() {
  const usTools = TOOLS.filter((t) => t.flag === "🇺🇸" || t.flag === "📮");
  const ukTools = TOOLS.filter((t) => t.flag === "🇬🇧");

  return (
    <section className="container-page py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Our Tools</p>
        <h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">All Photo Tools</h1>
        <p className="mt-2 text-sm text-slate-500">
          Select a tool below to resize, crop or prepare your photos for
          official documents.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>

      <div className="mx-auto mt-10 max-w-5xl">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-400">
          🇺🇸 United States
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {usTools.map((tool) => (
            <Link key={tool.slug} href={`/tools/${tool.slug}`} className="card flex flex-col p-6">
              <div className="flex items-start justify-between">
                <span className="text-2xl">{tool.flag}</span>
                <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-600">
                  {tool.widthPx}×{tool.heightPx}
                </span>
              </div>
              <h3 className="mt-3 text-base font-bold text-navy">{tool.name}</h3>
              <p className="mt-1 flex-1 text-sm text-slate-500">{tool.short}</p>
              <span className="btn-primary mt-4 w-full">Use Tool →</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        <AdSlot label="Advertisement" size="banner" />
      </div>

      <div className="mx-auto mt-10 max-w-5xl">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-400">
          🇬🇧 United Kingdom
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ukTools.map((tool) => (
            <Link key={tool.slug} href={`/tools/${tool.slug}`} className="card flex flex-col p-6">
              <div className="flex items-start justify-between">
                <span className="text-2xl">{tool.flag}</span>
                <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-600">
                  {tool.widthPx}×{tool.heightPx}
                </span>
              </div>
              <h3 className="mt-3 text-base font-bold text-navy">{tool.name}</h3>
              <p className="mt-1 flex-1 text-sm text-slate-500">{tool.short}</p>
              <span className="btn-primary mt-4 w-full">Use Tool →</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-brand-50 p-6 text-center">
        <p className="text-sm font-semibold text-navy">Not sure which tool you need?</p>
        <p className="mt-1 text-sm text-slate-500">
          Check our blog for detailed guides on each document's requirements.
        </p>
        <Link href="/blog" className="btn-primary mt-4 inline-flex">
          Visit Blog
        </Link>
      </div>
    </section>
  );
}
