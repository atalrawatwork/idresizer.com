import ContactForm from "@/components/ContactForm";
import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "Contact Us",
  description:
    "Have questions, suggestions, or need help? Get in touch with the idresizer.com support team.",
};

const SUPPORT_INFO = [
  { icon: "✉️", label: "Email", value: "support@idresizer.com" },
  { icon: "⏱️", label: "Response Time", value: "Within 24 hours" },
  { icon: "🌐", label: "Location", value: "Global Online Service" },
];

export default function ContactPage() {
  return (
    <section className="container-page py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Contact Us</p>
        <h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Get in Touch</h1>
        <p className="mt-2 text-sm text-slate-500">
          Have questions, suggestions, or need help? We'd love to hear from you.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-2xl">
        <AdSlot label="Advertisement" size="banner" />
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {SUPPORT_INFO.map((s) => (
            <div key={s.label} className="card flex items-center gap-4 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg">
                {s.icon}
              </span>
              <div>
                <p className="text-xs text-slate-400">{s.label}</p>
                <p className="text-sm font-semibold text-navy">{s.value}</p>
              </div>
            </div>
          ))}
          <AdSlot label="Advertisement" size="square" />
        </div>

        <ContactForm />
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>
    </section>
  );
}
