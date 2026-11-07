"use client";

import { useEffect, useState } from "react";

export default function BlogItems() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) {
          throw new Error();
        }
        const result = await response.json();

        setPosts(result);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchBlog();
  }, []);

  return (
    <div className="my-20">
      <ul className="flex items-center justify-center gap-20 flex-wrap text-black">
        {posts.map(({ id, blogName, description, slug }) => (
          <li className="flex flex-col items-center justify-center" key={id}>
            <h2 className="font-manrope font-semibold text-xl">{blogName}</h2>
            <p className="text-base">{description}</p>
            <a href={`/blog/${slug}`} className="underline underline-offset-3 decoration-main p-5">
              See the post
            </a>
          </li>
        ))}

        {posts.length === 0 && (
          <p className="text-main font-bold text-2xl">For now there's nothing here!</p>
        )}
      </ul>
    </div>
  );
}
