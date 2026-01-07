import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="container">
      <section className="hero">
        <h1>Welcome to My Blog{user ? `, ${user.firstName}` : ''}!</h1>
        <p className="lead">
          Learning Next.js 15 and implementing modern SEO practices with authentication
        </p>
        <div className="cta-buttons">
          <Link href="/blog" className="btn btn-primary">
            Read Blog
          </Link>
          <Link href="/about" className="btn btn-secondary">
            About Me
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>What I am Learning</h2>
        <div className="grid">
          <div className="feature-card">
            <h3>Server Components</h3>
            <p>Fast and SEO-friendly components that render on the server</p>
          </div>
          <div className="feature-card">
            <h3>Dynamic Routing</h3>
            <p>Creating routes automatically using folder structure</p>
          </div>
          <div className="feature-card">
            <h3>Authentication</h3>
            <p>Secure user authentication with Clerk</p>
          </div>
        </div>
      </section>
    </div>
  );
}