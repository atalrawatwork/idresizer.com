import { notFound } from "next/navigation";
import { TOOLS, getToolBySlug } from "@/lib/tools";
import ToolLandingPage from "@/components/ToolLandingPage";

export function generateStaticParams() {
  return TOOLS.filter((t) => t.legacyRoute).map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }) {
  const tool = getToolBySlug(params.slug);
  if (!tool || !tool.legacyRoute) return {};
  return {
    title: tool.name,
    description: `${tool.short} Free, instant, and 100% browser-based — outputs an exact ${tool.widthPx}x${tool.heightPx}px JPEG under ${tool.maxKB}KB.`,
    alternates: { canonical: `https://www.idresizer.com${tool.route}` },
  };
}

export default function LegacyToolPage({ params }) {
  const tool = getToolBySlug(params.slug);
  // Only the original 6 tools are served at /tools/[slug]; every newer
  // tool lives at its own top-level route and should 404 here to avoid
  // duplicate-content URLs.
  if (!tool || !tool.legacyRoute) notFound();

  return <ToolLandingPage tool={tool} />;
}
