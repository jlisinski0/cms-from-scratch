import BlogItems from "./BlogItems";

export default function Blog() {
  return (
    <section className=" flex flex-col items-center justify-start w-full h-full md:h-dvh bg-bg text-black py-20">
      <a className="absolute top-0 left-0  pr-5 pb-5" href="/">
        {" "}
        {">"} Go back
      </a>
      <div>
        <h1 className="font-manrope text-4xl lg:text-5xl text-main font-bold  text-center tracking-tighter">
          Blog
        </h1>
        <BlogItems />
      </div>
      <div>
        <a className="text-main font-semibold text-lg" href="/create-post">
          Add new post
        </a>
      </div>
    </section>
  );
}
