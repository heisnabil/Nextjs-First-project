import Link from "next/link";

export default function BlogCard({ title, excerpt, slug, date }) {
  return (
    <article className="blog-card">
      <div className="blog-card-header">
        <h3>{title}</h3>
        <span className="date">{date}</span>
      </div>
      <p className="excerpt">{excerpt}</p>
      <Link href={`/blog/${slug}`} className="read-more">
        Read More →
      </Link>
    </article>
  );
}