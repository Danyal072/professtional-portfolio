'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // To render raw HTML from Markdown
import "tailwindcss/tailwind.css"; // Ensure Tailwind styles are applied
import SideBar from "../components/post_detail/SideBar"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { Suspense } from "react";

interface Post {
  id: number;
  title: string;
  date: string;
  category: string;
  thumbinal: string;
  content: string;
}

export default function PostDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [post, setPost] = useState<Post | null>(null);
  const [content, setContent] = useState("");
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Import JSON data dynamically
    setTimeout(async ()=>{
      import("../../database/post.json")
      .then((data) => {
        const postData = data.post.find((item) => item.id === parseInt(id ?? '0', 10));
        if (postData) {
          setPost(postData);
        }

        if (postData) {
          // Fetch Markdown content from the public folder
          fetch(postData.content)
            .then((res) => res.text())
            .then((markdown) => setContent(markdown))
            .catch((err) => console.error("Failed to load content:", err));
        }
      })
      .catch((err) => console.error("Failed to load posts:", err));
    }, 300)

    setIsClient(true)

  }, [id]);

  if (!post) {
      return  <div id="skeletonss" className="items-center justify-center h-[99vh] w-full bg-dark">
      <div className="flex items-center justify-center space-x-4 px-4">
      <Skeleton className="h-[99vh] w-[20%]" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-[50vh] w-[100%]" />
          <Skeleton className="h-[10vh] w-[100%]" />
          <Skeleton className="h-[5vh]  w-[100%]" />
          <Skeleton className="h-[10vh] w-[100%]" />
          <Skeleton className="h-[2vh]  w-[100%]" />
          <Skeleton className="h-[15vh] w-[100%]" />
        </div>
    </div>
  </div>;
    } 

  return (

    <>
    <Header />
    <div id="top_blog_area" className="w-full h-[40vh] bg-[#030712] flex flex-col justify-center items-center">
        <div id="title_area" className="w-10/12 px-0 md:px-12 text-center">
          <h1 className="text-2xl md:text-4xl font-mono font-bold text-white flex justify-center items-center">
            {post.title}
          </h1>
        </div>
        <div id="category" className="relative top-10 flex flex-col md:flex-row justify-around w-full md:w-10/12">
          <p className="text-base md:text-xl text-primary/70 bg-[#0b1330] rounded-none md:rounded-full px-4 py-2">
          <b>Category:</b> {post.category}
          </p>
          <p className="text-base md:text-xl text-primary/70 bg-[#0b1330] rounded-none md:rounded-full px-4 py-2">
          <b>Published At:</b> {post.date}
          </p>
        </div>
    </div>
   <div id="pd_content" className="flex justify-center">
      <div id="side_bar" className="w-1/4 !relative hidden lg:block">
        <SideBar />
      </div>
      <div id="content_area" className="w-[100%] h-auto bg-[#0b1330]"> 
      <div className="w-full h-full px-4 py-8 bg-dark gap-6">
      <p className="text-lg text-gray flex justify-evenly items-center">
        {post.date}
      </p>
      <div id="image" className="flex items-center justify-center">
      <img
        src={post.thumbinal}
        alt={post.title}
        className="w-auto relative max-h-[50vh] object-contain mt-4 rounded-lg"
      />
      </div>
      <div className="mt-6 prose prose-lg dark:prose-invert max-w-none !text-white" >
        {/* Render Markdown with support for raw HTML */}
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </div>
    </div>
      </div>
   </div>
   <Footer />
  </>

  );
}
