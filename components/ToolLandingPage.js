import Link from "next/link";
import PhotoTool from "@/components/PhotoTool";
import AdSlot from "@/components/AdSlot";
import { TOOLS } from "@/lib/tools";
import { getPostByToolSlug } from "@/lib/blogPosts";

export default function ToolLandingPage({ tool }) {
  const relatedTools = TOOLS.filter(
    (t) => t.region === tool.region && t.slug !== tool.slug
  ).slice(0, 3);
  const guide = getPostByToolSlug(tool.slug);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: "PhotoApplication",
    operatingSystem: "Any (Web Browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: tool.short,
  };

  return (
    <section className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <nav className="text-xs text-slate-400">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-1.5">/</span>
        <Link href="/tools" className="hover:text-brand-600">Tools</Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-500">{tool.name}</span>
      </nav>

      <div className="mx-auto mt-4 max-w-2xl text-center">
        <span className="text-3xl">{tool.flag}</span>
        <h1 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
          {tool.name}
        </h1>
        <p className="mt-3 text-sm text-slate-500">{tool.short}</p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-600">
            {tool.widthPx}×{tool.heightPx}px
          </span>
          <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-600">
            Under {tool.maxKB}KB
          </span>
          <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-600">
            {tool.background} background
          </span>
          <span className="rounded-full bg-mint-50 px-3 py-1 font-semibold text-mint">
            100% Free
          </span>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-2xl">
        <AdSlot label="Advertisement" size="banner" />
      </div>

      <div className="mx-auto mt-6 max-w-4xl">
        <PhotoTool defaultSlug={tool.slug} locked />
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <h2 className="text-lg font-bold text-navy">About this tool</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{tool.notes}</p>

        {guide && (
          <Link
            href={`/blog/${guide.slug}`}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600"
          >
            Read the full guide: {guide.title}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <AdSlot label="Advertisement" size="banner" />
      </div>

      {relatedTools.length > 0 && (
        <div className="mx-auto mt-14 max-w-4xl">
          <h2 className="text-center text-lg font-bold text-navy">
            Other {tool.region === "US" ? "US" : "UK"} photo tools
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((t) => (
              <Link key={t.slug} href={t.route} className="card flex flex-col p-5">
                <span className="text-xl">{t.flag}</span>
                <h3 className="mt-2 text-sm font-bold text-navy">{t.name}</h3>
                <p className="mt-1 flex-1 text-xs text-slate-500">{t.short}</p>
                <span className="mt-3 text-xs font-semibold text-brand-600">Use Tool →</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto mt-12 max-w-2xl">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>
    </section>
  );
}
