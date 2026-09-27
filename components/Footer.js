import Link from "next/link";
import { getToolsByRegion } from "@/lib/tools";

export default function Footer() {
  const usTools = getToolsByRegion("US").slice(0, 5);
  const ukTools = getToolsByRegion("UK").slice(0, 5);

  return (
    <footer className="border-t border-slate-100 bg-navy text-slate-300">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="9" r="3.2" stroke="white" strokeWidth="1.6" />
                <path d="M5 19c1.2-3.2 3.9-4.8 7-4.8s5.8 1.6 7 4.8" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-base font-bold text-white">idresizer.com</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Free, browser-based photo tools for US and UK official documents.
            Your photos never leave your device.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Site</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/tools" className="hover:text-white">Tools</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">US Tools</p>
            <ul className="mt-3 space-y-2 text-sm">
              {usTools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={tool.route} className="hover:text-white">{tool.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">UK Tools</p>
            <ul className="mt-3 space-y-2 text-sm">
              {ukTools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={tool.route} className="hover:text-white">{tool.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} idresizer.com. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
          <p className="flex items-center gap-1">
            Clean · Simple · Fast · Free
          </p>
        </div>
      </div>
    </footer>
  );
}
