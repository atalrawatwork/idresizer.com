import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blogPosts";
import { getToolBySlug } from "@/lib/tools";
import AdSlot from "@/components/AdSlot";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getToolBySlug(post.relatedToolSlug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "idresizer.com" },
    publisher: { "@type": "Organization", name: "idresizer.com" },
    mainEntityOfPage: `https://www.idresizer.com/blog/${post.slug}`,
  };

  return (
    <article className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="mx-auto max-w-2xl">
        <nav className="text-xs text-slate-400">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          <span className="mx-1.5">/</span>
          <span className="text-slate-500">{post.title}</span>
        </nav>

        <div className="mt-6 flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 text-6xl">
          📄
        </div>

        <h1 className="mt-6 text-2xl font-extrabold leading-snug text-navy sm:text-3xl">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          · {post.readTime}
        </p>

        <div className="mt-8">
          <AdSlot label="Advertisement" size="leaderboard" />
        </div>

        <div className="prose prose-slate mt-8 max-w-none">
          {post.content.map((block, i) => (
            <div key={i}>
              <div className="mb-6">
                {block.heading && (
                  <h2 className="mb-2 text-lg font-bold text-navy">{block.heading}</h2>
                )}
                <p className="text-[15px] leading-relaxed text-slate-600">{block.body}</p>
              </div>
              {i === 1 && (
                <div className="-mx-2 mb-6">
                  <AdSlot label="Advertisement" size="banner" />
                </div>
              )}
              {i === 3 && (
                <div className="-mx-2 mb-6">
                  <AdSlot label="Advertisement" size="banner" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mb-8">
          <AdSlot label="Advertisement" size="leaderboard" />
        </div>

        {related && (
          <div className="mt-10 flex items-center gap-4 rounded-2xl bg-brand-50 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
              {related.flag}
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-navy">
                Use our {related.name} to automatically resize and crop your photo.
              </p>
            </div>
            <Link href={related.route} className="btn-primary shrink-0">
              Try Now
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
