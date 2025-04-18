import Layout from "@/components/features/commons/layout";
import { ScrambleText } from "@/components/features/commons/scramble-text";
import { baseMetadata } from "@/config/metadata";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  ...baseMetadata,
  title: `${(baseMetadata.title as { default: string }).default} | blog`,
  description: "some learnings from building and breaking things.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "blog",
    description: "some learnings from building and breaking things.",
  },
};

export default async function BlogPage() {
  try {
    const posts = await getAllPosts();

    return (
      <Layout>
        <div className="max-w-xl py-5">
          <h1 className="text-4xl font-bold mb-4 cursor-default">
            <span className="inline-block">
              <ScrambleText text="blog" />
            </span>
          </h1>
          <p className="text-lg">
            some learnings from building and breaking things.
          </p>
        </div>
        <div className="space-y-5">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-border py-5">
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-xl mb-2 text-foreground group-hover:[color:var(--color-primary)]">
                  {post.meta?.["og:title"] || post.title}
                </h2>
                <div className="flex items-center text-muted-foreground text-sm mb-4 font-mono">
                  <span>
                    {new Date(post.date)
                      .toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                      .toLowerCase()}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.readingTimeMin} min read</span>
                  {post.meta?.author && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{post.meta.author.toLowerCase()}</span>
                    </>
                  )}
                </div>
                <p className="text-muted-foreground font-mono text-sm">
                  {post.meta?.["og:description"] || ""}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </Layout>
    );
  } catch (error) {
    console.error("Error getting all posts:", error);
    return (
      <Layout>
        <h1 className="text-4xl mb-8 text-foreground">blog</h1>
        <p className="text-muted-foreground">no posts found.</p>
      </Layout>
    );
  }
}
