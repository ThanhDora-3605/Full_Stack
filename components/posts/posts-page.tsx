"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { addPost, getPosts, removePost, updatePost } from "@/lib/posts-api";
import type { Post } from "@/lib/types/post";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const PAGE_SIZE = 10;

export function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [listVersion, setListVersion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [addOpen, setAddOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [editing, setEditing] = useState<Post | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const skip = (page - 1) * PAGE_SIZE;
        const data = await getPosts(PAGE_SIZE, skip);
        if (cancelled) return;
        if (data.posts.length === 0 && page > 1) {
          setPage((p) => p - 1);
          return;
        }
        setPosts(data.posts);
        setTotal(data.total);
      } catch {
        if (!cancelled) toast.error("Không tải được danh sách bài viết.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [page, listVersion]);

  useEffect(() => {
    if (editOpen && editing) {
      setEditTitle(editing.title);
      setEditBody(editing.body ?? "");
    }
  }, [editOpen, editing]);

  const handleAdd = async () => {
    const title = newTitle.trim();
    const body = newBody.trim();
    if (!title) {
      toast.warning("Vui lòng nhập tiêu đề.");
      return;
    }
    if (!body) {
      toast.warning("Vui lòng nhập nội dung bài viết.");
      return;
    }
    setSubmitting(true);
    try {
      await addPost(title, body);
      toast.success("Đã thêm bài viết.");
      setNewTitle("");
      setNewBody("");
      setAddOpen(false);
      setPage(1);
      setListVersion((v) => v + 1);
    } catch {
      toast.error("Thêm bài viết thất bại.");
    } finally {
      setSubmitting(false);
    }
  };

  const openEdit = (post: Post) => {
    setEditing(post);
    setEditTitle(post.title);
    setEditBody(post.body ?? "");
    setEditOpen(true);
  };

  const handleUpdate = async () => {
    if (!editing) return;
    const title = editTitle.trim();
    const body = editBody.trim();
    if (!title) {
      toast.warning("Tiêu đề không được để trống.");
      return;
    }
    if (!body) {
      toast.warning("Nội dung không được để trống.");
      return;
    }
    setSubmitting(true);
    try {
      const updated = await updatePost(editing.id, title, body);
      setPosts((prev) => prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p)));
      toast.success("Đã cập nhật bài viết.");
      setEditOpen(false);
      setEditing(null);
    } catch {
      toast.error("Cập nhật thất bại.");
    } finally {
      setSubmitting(false);
    }
  };

  const openDelete = (id: number) => {
    setDeletingId(id);
    setDeleteOpen(true);
  };

  const handleDelete = async () => {
    if (deletingId == null) return;
    setSubmitting(true);
    try {
      await removePost(deletingId);
      const nextPosts = posts.filter((p) => p.id !== deletingId);
      if (nextPosts.length === 0 && page > 1) {
        setPage((p) => p - 1);
      }
      setPosts(nextPosts);
      setTotal((t) => Math.max(0, t - 1));
      toast.success("Đã xóa bài viết.");
      setDeleteOpen(false);
      setDeletingId(null);
    } catch {
      toast.error("Xóa thất bại.");
    } finally {
      setSubmitting(false);
    }
  };

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1000px_circle_at_10%_-10%,hsl(var(--foreground)/0.045),transparent_55%),radial-gradient(900px_circle_at_95%_0%,hsl(var(--foreground)/0.035),transparent_50%)]" />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Bài viết</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              DummyJSON Posts · CRUD với axios ·
            </p>
          </div>
          <Button type="button" onClick={() => setAddOpen(true)} className="sm:self-end">
            Thêm bài viết
          </Button>
        </div>

        <div className="rounded-2xl border bg-card/75 text-card-foreground shadow-sm backdrop-blur">
          {loading ? (
            <div className="p-6">
              <div className="grid gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-xl border bg-background/60 p-4">
                    <div className="h-4 w-3/5 animate-pulse rounded bg-muted" />
                    <div className="mt-3 h-3 w-4/5 animate-pulse rounded bg-muted" />
                    <div className="mt-2 h-3 w-2/5 animate-pulse rounded bg-muted" />
                  </div>
                ))}
              </div>
            </div>
          ) : posts.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-sm text-muted-foreground">Chưa có bài viết.</p>
              <Button className="mt-4" type="button" onClick={() => setAddOpen(true)}>
                Tạo bài viết đầu tiên
              </Button>
            </div>
          ) : (
            <ul className="divide-y">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="group flex flex-col gap-3 p-4 transition-colors hover:bg-muted/25 sm:flex-row sm:items-center sm:justify-between sm:p-5"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 rounded-full border bg-background/60 px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                        #{post.id}
                      </span>
                      <p className="truncate text-base font-semibold tracking-tight">{post.title}</p>
                    </div>
                    {post.body ? (
                      <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">{post.body}</p>
                    ) : null}
                    <p className="text-muted-foreground mt-2 text-xs">DummyJSON</p>
                  </div>
                  <div className="flex items-center gap-2 sm:justify-end">
                    <Link
                      href={`/posts/${post.id}`}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "gap-2 border-foreground/10 bg-background/70 shadow-sm hover:bg-background",
                      )}
                    >
                      <Eye className="size-4 text-muted-foreground" aria-hidden />
                      <span>Chi tiết</span>
                    </Link>
                    <Button
                      variant="secondary"
                      size="sm"
                      type="button"
                      onClick={() => openEdit(post)}
                      className="gap-2"
                    >
                      <Pencil className="size-4 text-muted-foreground" aria-hidden />
                      <span className="hidden sm:inline">Sửa</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      type="button"
                      onClick={() => openDelete(post.id)}
                      className="gap-2 border-rose-500/20 bg-rose-500/5 text-rose-700 hover:bg-rose-500/10 dark:text-rose-300"
                    >
                      <Trash2 className="size-4" aria-hidden />
                      <span className="hidden sm:inline">Xóa</span>
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {!loading && total > 0 && (
            <div className="flex items-center justify-end gap-2 border-t bg-background/40 p-4">
              <span className="rounded-full border bg-background/60 px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                Trang {page}/{totalPages}
              </span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={page <= 1 || loading}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                Trước
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={page >= totalPages || loading}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Sau
              </Button>
            </div>
          )}
        </div>
      </div>
      <Dialog
        open={addOpen}
        onOpenChange={(open) => {
          setAddOpen(open);
          if (!open) {
            setNewTitle("");
            setNewBody("");
          }
        }}
      >
        <DialogContent className="sm:max-w-lg" showCloseButton>
          <DialogHeader>
            <DialogTitle>Thêm bài viết</DialogTitle>
            <DialogDescription>Nhập tiêu đề và nội dung cho bài viết mới.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="new-title">Tiêu đề</Label>
              <Input
                id="new-title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Tiêu đề bài viết"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-body">Nội dung</Label>
              <Textarea
                id="new-body"
                value={newBody}
                onChange={(e) => setNewBody(e.target.value)}
                placeholder="Nội dung bài viết"
                rows={5}
                className="min-h-28 resize-y"
              />
            </div>
          </div>
          <DialogFooter className="border-0 bg-transparent p-0 sm:justify-end">
            <Button type="button" variant="outline" onClick={() => setAddOpen(false)}>
              Hủy
            </Button>
            <Button type="button" disabled={submitting} onClick={handleAdd}>
              {submitting ? "Đang lưu…" : "Lưu"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={editOpen}
        onOpenChange={(open) => {
          setEditOpen(open);
          if (!open) {
            setEditing(null);
            setEditBody("");
          }
        }}
      >
        <DialogContent className="sm:max-w-lg" showCloseButton>
          <DialogHeader>
            <DialogTitle>Sửa bài viết</DialogTitle>
            <DialogDescription>Chỉnh sửa tiêu đề và nội dung (đã điền sẵn giá trị hiện tại).</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-title">Tiêu đề</Label>
              <Input
                id="edit-title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Tiêu đề"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-body">Nội dung</Label>
              <Textarea
                id="edit-body"
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                placeholder="Nội dung"
                rows={6}
                className="min-h-32 resize-y"
              />
            </div>
          </div>
          <DialogFooter className="border-0 bg-transparent p-0 sm:justify-end">
            <Button type="button" variant="outline" onClick={() => setEditOpen(false)}>
              Hủy
            </Button>
            <Button type="button" disabled={submitting} onClick={handleUpdate}>
              {submitting ? "Đang lưu…" : "Cập nhật"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={deleteOpen}
        onOpenChange={(open) => {
          setDeleteOpen(open);
          if (!open) setDeletingId(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xóa bài viết?</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc chắn muốn xóa bài viết này?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDelete}
              disabled={submitting}
            >
              {submitting ? "Đang xóa…" : "Xóa"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
