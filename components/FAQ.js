const FAQS = [
  {
    q: "What background color does my photo need?",
    a: "US document photos (visa, passport, USPS appointment) require a plain white or off-white background. UK document photos (passport, DVLA license) require a light grey or cream background. Railcard photos accept any plain background. Avoid shadows, patterns, or textured walls behind you.",
  },
  {
    q: "Is my photo uploaded to your servers?",
    a: "No. Every tool on this site processes your photo entirely inside your browser using the HTML5 Canvas API. Your image is never transmitted over the network, stored on our servers, or seen by anyone else — it stays on your device from start to finish.",
  },
  {
    q: "Why does my resized photo still get rejected?",
    a: "Government portals check pixel dimensions, aspect ratio, and file size together. If any one is off — even by a few pixels or kilobytes — the upload can fail. Our tools crop and compress to the exact spec each portal expects, so resizing is no longer the reason for a rejection.",
  },
  {
    q: "What image formats can I upload?",
    a: "You can upload JPG, PNG, or WEBP files up to 10MB. Every tool outputs a JPEG, since that is the format required by US and UK government photo portals.",
  },
  {
    q: "Do I need to install anything or sign up?",
    a: "No downloads and no account required. Open the tool, upload your photo, and download the result — the entire process takes under a minute.",
  },
  {
    q: "Can I use these tools on my phone?",
    a: "Yes. Every tool works on desktop, tablet, and mobile browsers, including uploading directly from your phone's camera roll.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FAQ() {
  return (
    <section className="container-page py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">FAQ</p>
        <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
          Common questions about official photo requirements
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl gap-3">
        {FAQS.map((item) => (
          <details
            key={item.q}
            className="group card px-5 py-4 open:shadow-soft"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy">
              {item.q}
              <span className="shrink-0 text-brand-500 transition group-open:rotate-45">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
