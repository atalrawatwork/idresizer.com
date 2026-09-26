import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "About Us",
  description:
    "idresizer.com was created to help people prepare official photos simply, fast, and free — for US and UK visas, passports, driving licenses, railcards and more.",
};

const VALUES = [
  {
    icon: "🎯",
    title: "Our Mission",
    body: "To make photo preparation simple and accessible to everyone, regardless of technical skill, by removing every unnecessary step between a raw photo and a compliant one.",
  },
  {
    icon: "🌍",
    title: "Our Vision",
    body: "To be the most trusted online photo tool platform — the first place anyone thinks of when they need a photo prepared for an official application.",
  },
  {
    icon: "🛡️",
    title: "Why Choose Us",
    body: "Free, fast, secure, and works on all devices. We built idresizer.com to be the tool we wished existed the last time we had to renew a passport.",
  },
];

export default function AboutPage() {
  return (
    <section className="container-page py-14 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">About Us</p>
        <h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
          About idresizer.com
        </h1>
        <p className="mt-4 text-slate-600">
          We make official photo preparation simple, fast, and free. Whether
          you need a photo for US visas, passports, driving licenses,
          railcards and more, we understand how stressful application
          deadlines can be — so we built a tool that is simple, reliable,
          and free of confusing settings.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-2xl">
        <AdSlot label="Advertisement" size="banner" />
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
        {VALUES.map((v) => (
          <div key={v.title} className="card p-6 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">
              {v.icon}
            </span>
            <h2 className="mt-4 text-base font-bold text-navy">{v.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.body}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>

      <div className="mx-auto mt-4 max-w-3xl rounded-2xl bg-navy p-8 text-center text-white sm:p-10">
        <h2 className="text-xl font-bold">Built around one simple idea</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Every government photo portal enforces a different, precise spec —
          exact pixel dimensions, a specific aspect ratio, and a strict file
          size cap. Getting all three right by hand, in a generic photo
          editor, is genuinely hard. idresizer.com bakes each official spec
          directly into the tool, so preparing a compliant photo takes one
          upload instead of trial and error.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <AdSlot label="Advertisement" size="banner" />
      </div>
    </section>
  );
}
