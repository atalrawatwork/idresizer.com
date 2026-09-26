import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata = {
  metadataBase: new URL("https://www.idresizer.com"),
  title: {
    default: "idresizer.com — Resize & Crop Photos for Official Documents",
    template: "%s | idresizer.com",
  },
  description:
    "Free online photo resizer and cropper for US visa, US passport, USPS appointment, UK passport, UK DVLA driving license, and UK railcard photos. 100% browser-based — your photo never leaves your device.",
  keywords: [
    "passport photo resizer",
    "visa photo size",
    "UK passport photo 35x45mm",
    "DVLA photo tool",
    "USPS passport photo",
    "railcard photo resizer",
  ],
  openGraph: {
    title: "idresizer.com — Resize & Crop Photos for Official Documents",
    description:
      "Free, secure, browser-based tools to resize and crop photos for US and UK official document applications.",
    url: "https://www.idresizer.com",
    siteName: "idresizer.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "idresizer.com — Resize & Crop Photos for Official Documents",
    description:
      "Free, secure, browser-based tools to resize and crop photos for US and UK official document applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "idresizer.com",
  url: "https://www.idresizer.com",
  description:
    "Free online photo resizer and cropper for US and UK official document photos.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "idresizer.com",
  url: "https://www.idresizer.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.idresizer.com/blog?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* AdSense loader goes here once approved, e.g.:
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className="flex min-h-screen flex-col bg-white text-navy antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
