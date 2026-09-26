import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { BLOG_POSTS } from "@/lib/blogPosts";

export const metadata = {
  title: "Blog — Tips, Guides & Latest Updates",
  description:
    "Helpful articles, step-by-step guides and useful tips for your photo and document requirements — US visa, US passport, UK passport, DVLA and more.",
};

export default function BlogPage() {
  const groupA = BLOG_POSTS.slice(0, 2);
  const groupB = BLOG_POSTS.slice(2, 4);
  const groupC = BLOG_POSTS.slice(4, 6);

  const renderCard = (post) => (
    <Link
      key={post.slug}
      href={`/blog/${post.slug}`}
      className="card group flex flex-col overflow-hidden"
    >
      <div className="flex h-32 items-center justify-center bg-gradient-to-br from-brand-100 to-brand-50 text-4xl">
        📄
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-slate-400">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          · {post.readTime}
        </p>
        <h2 className="mt-2 text-base font-bold text-navy group-hover:text-brand-600">
          {post.title}
        </h2>
        <p className="mt-2 flex-1 text-sm text-slate-500">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
          Read More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );

  return (
    <section className="container-page py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Blog</p>
        <h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
          Tips, Guides &amp; Latest Updates
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Find helpful articles, step-by-step guides and useful tips for
          your photo and document requirements.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groupA.map(renderCard)}
      </div>

      <div className="mx-auto my-8 max-w-4xl">
        <AdSlot label="Advertisement" size="banner" />
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groupB.map(renderCard)}
      </div>

      <div className="mx-auto my-8 max-w-4xl">
        <AdSlot label="Advertisement" size="banner" />
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groupC.map(renderCard)}
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        <AdSlot label="Advertisement" size="leaderboard" />
      </div>
    </section>
  );
}
