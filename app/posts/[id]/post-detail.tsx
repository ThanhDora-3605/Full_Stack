"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronLeft, Eye, ThumbsDown, ThumbsUp, UserRound } from "lucide-react";
import { toast } from "sonner";
import { getPostById } from "@/lib/posts-api";
import type { Post } from "@/lib/types/post";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PostDetail() {
  const params = useParams();
  const idParam = params.id;
  const id = typeof idParam === "string" ? Number(idParam) : Number(Array.isArray(idParam) ? idParam[0] : NaN);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [reaction, setReaction] = useState<"like" | "dislike" | null>(null);

  useEffect(() => {
    if (!Number.isFinite(id)) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const data = await getPostById(id);
        if (!cancelled) {
          setPost(data);
          setReaction(null);
        }
      } catch {
        if (!cancelled) {
          setPost(null);
          toast.error("Không tải được bài viết.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (!Number.isFinite(id)) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-muted-foreground text-sm">ID không hợp lệ.</p>
        <Link href="/" className={cn(buttonVariants({ variant: "default" }), "mt-4 inline-flex")}>
          Quay lại
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1000px_circle_at_10%_-10%,hsl(var(--foreground)/0.045),transparent_55%),radial-gradient(900px_circle_at_95%_0%,hsl(var(--foreground)/0.035),transparent_50%)]" />
        <div className="mx-auto w-full max-w-5xl px-4 py-10">
          <div className="min-w-0">
            <div className="mb-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="h-6 w-40 animate-pulse rounded bg-muted" />
                <div className="h-8 w-28 animate-pulse rounded-lg bg-muted" />
              </div>
              <div className="h-10 w-4/5 animate-pulse rounded bg-muted sm:h-11" />
              <div className="flex flex-wrap gap-2">
                <div className="h-7 w-24 animate-pulse rounded-full bg-muted" />
                <div className="h-7 w-24 animate-pulse rounded-full bg-muted" />
                <div className="h-7 w-28 animate-pulse rounded-full bg-muted" />
              </div>
            </div>

            <div className="rounded-2xl border bg-card/75 p-6 shadow-sm backdrop-blur sm:p-8">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
                <span className="text-xs font-semibold text-muted-foreground">ARTICLE</span>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
              </div>
              <div className="mt-6 grid gap-3">
                <div className="h-4 w-full animate-pulse rounded bg-muted" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-muted" />
                <div className="h-4 w-10/12 animate-pulse rounded bg-muted" />
                <div className="h-4 w-9/12 animate-pulse rounded bg-muted" />
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <div className="h-7 w-16 animate-pulse rounded-full bg-muted" />
                <div className="h-7 w-20 animate-pulse rounded-full bg-muted" />
                <div className="h-7 w-14 animate-pulse rounded-full bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1000px_circle_at_10%_-10%,hsl(var(--foreground)/0.045),transparent_55%),radial-gradient(900px_circle_at_95%_0%,hsl(var(--foreground)/0.035),transparent_50%)]" />
        <div className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-2xl border bg-card/75 p-6 shadow-sm backdrop-blur">
            <p className="text-sm text-muted-foreground">Không tìm thấy bài viết.</p>
            <Link href="/" className={cn(buttonVariants({ variant: "default" }), "mt-4 inline-flex")}>
              Quay lại
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const baseLikes = post.reactions?.likes ?? 0;
  const baseDislikes = post.reactions?.dislikes ?? 0;
  const likes = baseLikes + (reaction === "like" ? 1 : 0);
  const dislikes = baseDislikes + (reaction === "dislike" ? 1 : 0);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1000px_circle_at_10%_-10%,hsl(var(--foreground)/0.045),transparent_55%),radial-gradient(900px_circle_at_95%_0%,hsl(var(--foreground)/0.035),transparent_50%)]" />
      <div className="mx-auto w-full max-w-5xl px-4 py-10">
        <div className="min-w-0">
          <div className="mb-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Link href="/" className="rounded-md px-1 py-0.5 hover:text-foreground">
                  Bài viết
                </Link>
                <span className="text-muted-foreground/60">/</span>
                <span className="rounded-full border bg-background/60 px-2 py-0.5 text-[11px] font-semibold">
                  #{post.id}
                </span>
              </nav>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "gap-2 bg-background/70 shadow-sm hover:bg-background",
                )}
              >
                <ChevronLeft className="size-4" aria-hidden />
                <span>Quay lại</span>
              </Link>
            </div>

            <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium">
                <UserRound className="size-4" aria-hidden />
                User {post.userId}
              </span>
              {post.views != null && (
                <span className="inline-flex items-center gap-1.5 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium">
                  <Eye className="size-4" aria-hidden />
                  {post.views} views
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-background/60 px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                DummyJSON
              </span>
            </div>
          </div>

          <article className="rounded-2xl border bg-card/75 p-6 text-card-foreground shadow-sm backdrop-blur sm:p-8">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
              <span className="text-xs font-semibold text-muted-foreground">ARTICLE</span>
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
            </div>

            <p className="mt-6 whitespace-pre-wrap text-[15px] leading-relaxed text-foreground sm:text-base sm:leading-7">
              {post.body}
            </p>

            {post.reactions && (
              <div className="mt-8">
                <p className="text-xs font-semibold tracking-wide text-muted-foreground">REACTIONS</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setReaction((r) => (r === "like" ? null : "like"))}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
                      reaction === "like"
                        ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                        : "bg-background/60 hover:bg-background",
                    )}
                    aria-pressed={reaction === "like"}
                  >
                    <ThumbsUp className="size-4" aria-hidden />
                    <span>{likes}</span>
                    <span className="text-xs text-muted-foreground">Like</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setReaction((r) => (r === "dislike" ? null : "dislike"))}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
                      reaction === "dislike"
                        ? "border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300"
                        : "bg-background/60 hover:bg-background",
                    )}
                    aria-pressed={reaction === "dislike"}
                  >
                    <ThumbsDown className="size-4" aria-hidden />
                    <span>{dislikes}</span>
                    <span className="text-xs text-muted-foreground">Dislike</span>
                  </button>
                </div>
              </div>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="mt-8">
                <p className="text-xs font-semibold tracking-wide text-muted-foreground">TAGS</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 bg-secondary/80 px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
