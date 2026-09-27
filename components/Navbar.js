import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        {/* <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" opacity="0.001" />
              <circle cx="12" cy="9" r="3.2" stroke="white" strokeWidth="1.6" />
              <path d="M5 19c1.2-3.2 3.9-4.8 7-4.8s5.8 1.6 7 4.8" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-base font-bold text-navy">
            Id Resizer<span className="text-brand-600">.com</span>
          </span>
        </Link> */}
        <Link href="/" className="flex items-center gap-2">
  {/* पुराना कमेंटेड SVG हटाकर यह कोड पेस्ट करें */}
  <Image 
    src="/logo.png"            // आपकी इमेज का नाम (जो public फ़ोल्डर में है)
    alt="Id Resizer Logo"      // इमेज का नाम (SEO के लिए)
    width={44}                 // चौड़ाई (32 पिक्सल्स)
    height={44}                // ऊँचाई (32 पिक्सल्स)
    className="object-contain" // इमेज का रेशियो सही रखने के लिए
  />

  <span className="text-base font-bold text-navy">
    Id Resizer<span className="text-brand-600">.com</span>
  </span>
</Link>


        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/tools"
          className="hidden rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100 md:inline-flex"
        >
          Explore Tools
        </Link>
      </div>
    </header>
  );
}
