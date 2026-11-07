import { blogItems } from "@/app/api/blog/[slug]/blog";

export async function GET(_request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
    const {slug} = await params
    const post = blogItems.find((item) => item.slug === slug)

    if(!post){
        return Response.json({error: "nie znaleziono wpisu"}, {status: 404})
    }

    return Response.json(post)

}