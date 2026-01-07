import BlogCard from "../components/BlogCard";
import { currentUser } from "@clerk/nextjs/server";

const blogPosts = [
  {
    title: "Understanding Next.js 15 App Router",
    excerpt:
      "I learned how the new App Router works in Next.js 15 and how it improves performance and SEO.",
    slug: "nextjs-app-router",
    date: "Jan 5, 2026",
  },
  {
    title: "SEO Best Practices for React and Next.js",
    excerpt:
      "In this blog, I share simple SEO practices like meta tags, server-side rendering, and clean URLs.",
    slug: "seo-best-practices",
    date: "Jan 4, 2026",
  },
  {
    title: "Server vs Client Components in Next.js",
    excerpt:
      "This post explains the difference between Server and Client Components in easy language.",
    slug: "server-vs-client-components",
    date: "Jan 3, 2026",
  },
  {
    title: "Authentication in Next.js using Clerk",
    excerpt:
      "I implemented authentication using Clerk and learned how to protect routes and manage users.",
    slug: "nextjs-clerk-authentication",
    date: "Jan 6, 2026",
  },
];

export default async function Blog() {
  const user = await currentUser();

  return (
    <div className="container">
      <h1>Blog</h1>
      <p className="subtitle">
        {user ? `Welcome ${user.firstName}! ` : ""}
        This blog shares what I am learning about Next.js, SEO, and authentication.
      </p>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
}
