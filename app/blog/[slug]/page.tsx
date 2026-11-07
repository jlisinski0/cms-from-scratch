import BlogPostFromApi from "./BlogPostFromApi";

export default async function BlogPostPage({ params,
}: {
  params: Promise<{ slug: string }>;
}){
    const {slug} = await params
    return <BlogPostFromApi slug={slug}/>
}