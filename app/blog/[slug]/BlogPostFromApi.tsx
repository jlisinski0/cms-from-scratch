"use client";

import type { blogItemsProp } from "@/app/api/blog/[slug]/blog";
import { useEffect, useState } from "react";

export default function BlogPostFromApi({ slug }: { slug: string }) {
  const [post, setPost] = useState<blogItemsProp | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/blog/${encodeURIComponent(slug)}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setPost)
      .catch(() => setError(true));
  }, [slug]);

  if (error) return <p>Nie znaleziono żadnego wpisu</p>;
  if (!post) {
    return <p>Ładowanie....</p>;
  }

  return (
    <article>
      <a href="/blog">wroc do poprzedniej strony</a>
      <p>{post.blogName}</p>
    </article>
  );
}
