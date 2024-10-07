export type Post = {
  id: string;
  title: string;
  content: string | null;
  photo: string | null;
  published: boolean;
  authorId: string | null;
  author: {
    name: string | null;
  } | null;
};