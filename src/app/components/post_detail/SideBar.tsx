import Link from 'next/link'
import React from 'react'


export default function SideBar() {

  return (
    <>
    
        <div id="area_place" className='relative w-auto top-10 p-2 py-8 h-[100vh]  flex flex-col justify-center items-center text-white gap-10'>
         
        <h1 id='follow_me' className="text-2xl md:text-3xl lg:text-xl xl:text-3xl font-bold uppercase text-center">Follow Me <br /> Here</h1>
            <div id="social_icons" className='flex flex-col justify-center items-center h-full w-[full] gap-16'>
            <Link href="https://instagram.com/danyal.ahmmd" ><i className='bi bi-instagram text-base  lg:text-lg xl:text-2xl border rounded-full py-2 xl:py-4 lg:py-3 lg:px-4 px-3 xl:px-5'></i></Link>
                        <Link href="https://www.linkedin.com/in/danyal-ahmed-web-developer/" ><i className='bi bi-linkedin text-base  lg:text-lg xl:text-2xl border rounded-full py-2 xl:py-4 lg:py-3 lg:px-4 px-3 xl:px-5'></i></Link>
                        <Link href="https://threads.com/danyal.ahmmd" ><i className='bi bi-threads text-base  lg:text-lg xl:text-2xl border rounded-full py-2 xl:py-4 lg:py-3 lg:px-4 px-3 xl:px-5'></i></Link>
            </div>
        </div>
    </>
  )
}
