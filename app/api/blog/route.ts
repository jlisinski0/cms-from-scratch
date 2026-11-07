import { blogItems } from "../blog/[slug]/blog";

export async function GET() {
  return Response.json(blogItems);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { blogName } = body;
  const { description } = body;

  const newPost = {
    id: Date.now(),
    thumbnail: "",
    blogName,
    description,
    slug: blogName,
  };

  blogItems.push(newPost);

  return Response.json({ newPost });
}
