import { PostData } from "./createPostTypes";

export async function createPost(post: PostData): Promise<void> {
  const response = await fetch("/api/blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error(`Nie udało się utworzyć posta, error: ${response.status}`);
  }

  return response.json();
}
