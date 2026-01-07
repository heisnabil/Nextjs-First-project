export const metadata = {
  title: "About Me - NabilBlog",
  description: "Learn about my journey in web development",
};

export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      
      <div className="about-content">
        <section className="about-section">
          <h2>My Journey</h2>
          <p>
            I am Nabil Ahmed,learning Next.js 15 and modern web development.
            This project showcases my understanding of React, Next.js, and SEO principles.
          </p>
        </section>

        <section className="about-section">
          <h2>What I have Learned</h2>
          <ul className="skills-list">
  <li>Next.js 15 App Router</li>
  <li>Server vs Client Components</li>
  <li>File-based Routing</li>
  <li>Dynamic Routes with [slug]</li>
  <li>SEO Metadata</li>
  <li>Component Architecture</li>
  <li>Authentication using Clerk</li>
  <li>Protected Routes</li>
  <li>Responsive Navbar Design</li>
  <li>Blog System Implementation</li>
</ul>

        </section>

        <section className="about-section">
          <h2>Tech Stack</h2>
          <div className="tech-stack">
            <span className="tech-badge">Next.js 15</span>
            <span className="tech-badge">React</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">Tailwind CSS</span>
          </div>
        </section>
      </div>
    </div>
  );
}