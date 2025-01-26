import React from 'react'
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // To render raw HTML from Markdown
import "tailwindcss/tailwind.css"; // Ensure Tailwind styles are applied
import SideBar from "./SideBar"
import Image from 'next/image';

interface Post {
  title: string;
  category: string;
  date: string;
  thumbinal: string;
}

interface PostDetailsProps {
  post: Post;
  content: string;
}

export default function PostDetails({post, content}: PostDetailsProps) {
  return (
    <>
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
      <Image
        src={post.thumbinal}
        alt={post.title}
        width={800}
        height={400}
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
    </>
  )
}
