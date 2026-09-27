import { getToolBySlug } from "@/lib/tools";
import ToolLandingPage from "@/components/ToolLandingPage";

const tool = getToolBySlug("uk-passport-digital");

export const metadata = {
  title: tool.name,
  description: `${tool.short} Free, instant, and 100% browser-based — outputs an exact ${tool.widthPx}x${tool.heightPx}px JPEG under ${tool.maxKB}KB.`,
  alternates: { canonical: `https://www.idresizer.com${tool.route}` },
};

export default function Page() {
  return <ToolLandingPage tool={tool} />;
}
