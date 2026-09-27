import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import ToolsExplorer from "@/components/ToolsExplorer";
import { TOOLS } from "@/lib/tools";

export const metadata = {
  title: "All Photo Tools — US & UK Document Photo Resizers",
  description:
    "Browse every free photo tool on idresizer.com, sorted by country: US visa, Green Card, DV Lottery, driving license, plus UK passport, DVLA, Railcard, and Student Visa photo resizers.",
};

export default function ToolsPage() {
  return (
    <section className="container-page py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Our Tools</p>
        <h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">All Photo Tools</h1>
        <p className="mt-2 text-sm text-slate-500">
          Pick your country below, then select a tool to resize, crop or
          prepare your photo for that document.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>

      <div className="mt-10">
        <ToolsExplorer tools={TOOLS} />
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <AdSlot label="Advertisement" size="banner" />
      </div>

      <div className="mx-auto mt-8 max-w-4xl">
        <AdSlot label="Advertisement" size="banner" />
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-brand-50 p-6 text-center">
        <p className="text-sm font-semibold text-navy">Not sure which tool you need?</p>
        <p className="mt-1 text-sm text-slate-500">
          Check our blog for detailed guides on each document's requirements.
        </p>
        <Link href="/blog" className="btn-primary mt-4 inline-flex">
          Visit Blog
        </Link>
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>
    </section>
  );
}
