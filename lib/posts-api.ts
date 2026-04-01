import { api } from "@/lib/api";
import type { Post, PostsListResponse } from "@/lib/types/post";

export async function getPosts(limit = 30, skip = 0) {
  const { data } = await api.get<PostsListResponse>("/posts", {
    params: { limit, skip },
  });
  return data;
}

export async function getPostById(id: number) {
  const { data } = await api.get<Post>(`/posts/${id}`);
  return data;
}

export async function addPost(title: string, body: string, userId = 1) {
  const { data } = await api.post<Post>("/posts/add", { title, body, userId });
  return data;
}

export async function updatePost(id: number, title: string, body: string) {
  const { data } = await api.put<Post>(`/posts/${id}`, { title, body });
  return data;
}

export async function removePost(id: number) {
  const { data } = await api.delete<Post & { isDeleted?: boolean; deletedOn?: string }>(
    `/posts/${id}`,
  );
  return data;
}
