"use client";

import { useState } from "react";
import Link from "next/link";

export default function ToolsExplorer({ tools }) {
  const [region, setRegion] = useState("US");
  const filtered = tools.filter((t) => t.region === region);

  return (
    <div>
      <div className="mx-auto flex max-w-xs items-center justify-center gap-2 rounded-full bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setRegion("US")}
          className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
            region === "US" ? "bg-white text-brand-600 shadow-sm" : "text-slate-500"
          }`}
        >
          🇺🇸 United States
        </button>
        <button
          type="button"
          onClick={() => setRegion("UK")}
          className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
            region === "UK" ? "bg-white text-brand-600 shadow-sm" : "text-slate-500"
          }`}
        >
          🇬🇧 United Kingdom
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-slate-400">
        Select where you're applying so you only see the tools you actually need.
      </p>

      <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tool) => (
          <Link key={tool.slug} href={tool.route} className="card flex flex-col p-6">
            <div className="flex items-start justify-between">
              <span className="text-2xl">{tool.flag}</span>
              <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-600">
                {tool.widthPx}×{tool.heightPx}
              </span>
            </div>
            <h3 className="mt-3 text-base font-bold text-navy">{tool.name}</h3>
            <p className="mt-1 flex-1 text-sm text-slate-500">{tool.short}</p>
            <span className="btn-primary mt-4 w-full">Use Tool →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
