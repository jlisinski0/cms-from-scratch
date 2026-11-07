"use client";

import { useActionState } from "react";
import { createPost } from "./createPost";
import { PostState, PostData } from "./createPostTypes";

const initialState: PostState = {
  errors: { blogName: null, description: null },
  data: { blogName: "", description: "" },
};

export default function Post() {
  const uploadPost = async (prevState: PostState, formData: FormData): Promise<PostState> => {
    const blogNameValue = formData.get("blogName");
    const blogName = typeof blogNameValue === "string" ? blogNameValue.trim() : "";
    const descriptionValue = formData.get("description");
    const description = typeof descriptionValue === "string" ? descriptionValue.trim() : "";

    const errors = {
      blogName: blogName ? null : "Blog name is required.",
      description: description ? null : "Description is required.",
    };

    const data: PostData = { blogName, description };

    if (errors.blogName || errors.description) {
      return { errors, data };
    }

    await createPost(data);

    return {
      errors: { blogName: null, description: null },
      data: { blogName: "", description: "" },
    };
  };

  const [state, sendAction, isPending] = useActionState(uploadPost, initialState);

  return (
    <section className=" flex flex-col items-center justify-start w-full h-full md:h-dvh bg-bg text-black py-20">
      <h1 className="font-manrope text-4xl lg:text-5xl text-main font-bold  text-center tracking-tighter">
        Create a new post
      </h1>
      <form className="flex flex-col gap-5" action={sendAction}>
        <div className="flex flex-col pt-10">
          <label htmlFor="blogName" className="font-semibold">
            Enter title:{" "}
          </label>
          <input
            className="border border-main rounded-sm"
            type="text"
            name="blogName"
            id="blogName"
            defaultValue={state.data.blogName}
          />
          <p className="text-sm text-red-500 ">{state?.errors.blogName}</p>
        </div>
        <div className="flex flex-col pt-10">
          <label htmlFor="description" className="font-semibold">
            Enter title:{" "}
          </label>
          <input
            className="border border-main rounded-sm"
            type="text"
            name="description"
            id="description"
            defaultValue={state.data.description}
          />
          <p className="text-sm text-red-500 ">{state?.errors.description}</p>
        </div>
        <button
          disabled={isPending}
          type="submit"
          className="cursor-pointer rounded-2xl py-2 px-5 text-base bg-main text-bg font-semibold hover:opacity-80 transition-opacity duration-300"
        >
          {isPending ? "Post is being create" : "Create post"}
        </button>
        <br />
      </form>
    </section>
  );
}
