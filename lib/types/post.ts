export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags?: string[];
  reactions?: { likes: number; dislikes: number };
  views?: number;
};

export type PostsListResponse = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};
