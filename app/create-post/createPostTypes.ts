export type PostState = {
  errors: {
    blogName: string | null;
    description: string | null;
  };
  data: PostData;
};

export type PostData = {
  blogName: string;
  description: string;
};
