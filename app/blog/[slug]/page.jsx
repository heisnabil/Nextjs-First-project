import Link from "next/link";

const blogData = {
  "nextjs-app-router": {
    title: "Understanding Next.js 15 App Router",
    date: "Jan 5, 2026",
    content: `
Next.js 15 introduced the App Router which makes building websites easier and faster.
It uses Server Components by default, which means pages load faster and SEO becomes better.
The App Router also helps in organizing files and routing in a clean way.
`,
  },

  "seo-best-practices": {
    title: "SEO Best Practices for React and Next.js",
    date: "Jan 4, 2026",
    content: `
SEO is very important for modern websites.
Using Next.js helps because it supports server-side rendering.
Good SEO practices include proper meta tags, clean URLs, semantic HTML, and fast page load.
`,
  },

  "server-vs-client-components": {
    title: "Server vs Client Components in Next.js",
    date: "Jan 3, 2026",
    content: `
Server Components run on the server and send HTML to the browser.
They are fast and good for SEO.
Client Components are used when we need interaction like buttons, forms, and useState.
`,
  },

  "nextjs-clerk-authentication": {
    title: "Authentication in Next.js using Clerk",
    date: "Jan 6, 2026",
    content: `
I implemented authentication in my Next.js project using Clerk.
Clerk makes login, signup, and user management very easy.
I learned how to protect routes and show different UI for logged-in users.
`,
  },
};

export default async function BlogPost({ params }) {
  const { slug } = await params; // ✅ Required in Next.js 15
  const post = blogData[slug];

  if (!post) {
    return (
      <div className="container">
        <h1>Post not found</h1>
        <p>The blog post you are looking for does not exist.</p>
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <article className="blog-post">
        <header>
          <h1>{post.title}</h1>
          <p className="date">{post.date}</p>
        </header>

        <div className="content">
          <p>{post.content}</p>
        </div>

        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>
      </article>
    </div>
  );
}
