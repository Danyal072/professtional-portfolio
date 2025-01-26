'use client';

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import "tailwindcss/tailwind.css";
import { Skeleton } from "@/components/ui/skeleton";
import PostDetails from "../components/post_detail/PostDetail";

export const dynamic = "force-dynamic"; // Ensure dynamic rendering

interface Post {
  id: number;
  title: string;
  date: string;
  category: string;
  thumbinal: string;
  content: string;
}

function FetchPostData({ id }: { id: string | null }) {
  const [post, setPost] = useState<Post | null>(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await import("../../database/post.json");
        const postData = data.blog_post.find((item) => item.id === parseInt(id ?? "0", 10));
        if (postData) {
          setPost(postData);
          const res = await fetch(postData.content);
          const markdown = await res.text();
          setContent(markdown);
        }
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    };

    fetchData();
  }, [id]);

  if (!post) {
    return <Skeleton className="h-80 w-full" />;
  }

  return <PostDetails post={post} content={content} />;
}

export default function PostDetail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostDetailContent />
    </Suspense>
  );
}
function PostDetailContent() {
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  return <FetchPostData id={postId} />;
}
