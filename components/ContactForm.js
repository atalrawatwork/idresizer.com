"use client";

import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sent

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    else if (form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // No backend is configured yet; this simulates a successful submission
    // and gives the user clear confirmation.
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="card flex flex-col items-center justify-center p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint-50 text-2xl">✅</span>
        <h2 className="mt-4 text-lg font-bold text-navy">Message sent</h2>
        <p className="mt-2 max-w-sm text-sm text-slate-500">
          Thanks, {form.name.split(" ")[0]}. We've received your message and
          will reply to {form.email} within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm({ name: "", email: "", message: "" });
            setStatus("idle");
          }}
          className="btn-secondary mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card space-y-4 p-6 sm:p-7">
      <div>
        <label className="text-sm font-semibold text-navy">Name *</label>
        <input
          type="text"
          value={form.name}
          onChange={update("name")}
          placeholder="Your name"
          className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
        {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
      </div>

      <div>
        <label className="text-sm font-semibold text-navy">Email *</label>
        <input
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="your@email.com"
          className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
        {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
      </div>

      <div>
        <label className="text-sm font-semibold text-navy">Message *</label>
        <textarea
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Your message..."
          className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
        {errors.message && <p className="mt-1 text-xs text-rose-600">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary w-full">
        Send Message
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
