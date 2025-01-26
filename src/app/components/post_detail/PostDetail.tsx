import React from 'react'
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // To render raw HTML from Markdown
import "tailwindcss/tailwind.css"; // Ensure Tailwind styles are applied
import SideBar from "./SideBar"
import Image from 'next/image';
import Header from '../Header';
import Footer from '../Footer';

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

      <Header />
    <div id="main_content_area" className='w-full h-full flex flex-col justify-end items-end overflow-x-hidden'>
       
     <div id="pd_content" className="flex justify-center">
        <div id="side_bar" className="w-1/4 hidden bg-muted/90 lg:block">
         <SideBar />
       </div>
      <div id="content_area" className="w-[100%] h-auto"> 
      <div id="top_blog_area" className="!bg-muted/80 lg:w-[100%] w-full h-[40vh] flex flex-col justify-center items-end">
        <div id="title_area" className="w-[100%] px-0 md:px-12 text-center">
          <h1 className="text-2xl lg:text-6xl font-serif font-bold text-white flex justify-center items-center">
            {post.title}
          </h1>
        </div>
        <div id="category" className="relative top-10 flex flex-col lg:flex-row gap-2 justify-around w-full lg:w-10/12">
          <p className="text-base lg:text-xl text-primary/70 bg-popover/50 rounded-none lg:rounded-full px-4 py-2">
          <b>Category:</b> {post.category}
          </p>
          <p className="text-base lg:text-xl text-primary/70 bg-popover/50 rounded-none lg:rounded-full px-4 py-2">
          <b>Published At:</b> {post.date}
          </p>
        </div>

      </div>
      <div className="w-full h-auto px-4 py-8 bg-dark gap-6 bg-muted  ">

      <div id="image" className="flex items-center justify-center">
      <Image
        src={post.thumbinal}
        alt={post.title}
        width={800}
        height={400}
        className="w-auto relative max-h-[50vh] object-contain mt-4 rounded-lg"
        />
      </div>
      <div className="mt-6 prose prose-lg dark:prose-invert max-w-none !text-white" > {/* dark:prose-invert */}
        {/* Render Markdown with support for raw HTML */}
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </div>
    </div>
      </div>
   </div>
        </div>
   <Footer />
    </>
  )
}
