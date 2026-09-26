import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center justify-center py-24 text-center sm:py-32">
      <div className="relative flex h-40 w-40 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-brand-100 blur-2xl" />
        <span className="relative text-5xl">📷</span>
        <span className="absolute -right-2 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm shadow-soft">
          ❓
        </span>
      </div>
      <p className="mt-6 text-6xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-2 text-2xl font-bold text-navy">Page Not Found</h1>
      <p className="mt-2 max-w-sm text-sm text-slate-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn-primary mt-7">
        Go Home
      </Link>
    </section>
  );
}
