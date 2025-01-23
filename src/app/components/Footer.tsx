import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function Footer() {
    var d = new Date();
    var n = d.getFullYear();
  return (
    <>
        <div id="footer" className='w-full h-auto lg:h-screen text-white flex sm:flex flex-col justify-center items-center'>
            <div id="first-section" className='w-[100%] h-[20vh] xl:h-[45vh]'>
                <div id="top-footer" className="w-full h-full flex flex-col justify-center items-center gap-4 md:gap-10">
                <h1 className="text-xl text-primary/80 font-light">|| &nbsp; Get Latest Updates</h1>
                <h1 className="text-xl md:text-3xl lg:text-6xl font-bold">Subscribe For Newsletter</h1>
                </div>
            </div>
            <div id="second-section" className='w-[100%] md:h-[10vh] xl:h-[30vh] h-[30vh] flex justify-center items-center'>
                <form action="/" className='w-full md:w-10/12 lg:w-1/2 flex flex-col sm:flex-row px-5 sm:px-0 justify-center items-center gap-6'>
                    <Input type="email" placeholder="demo@example.com" className='rounded-full h-[8vh] px-[3rem]' />
                    <Button variant={'secondary'} className='rounded-full font-light h-[8vh] md:h-[8vh] w-[50vw] md:w-[40vw] lg:w-[15vw] text-base'>Subscribe Now</Button>
                </form>
            </div>
            <div id="third-section" className='w-[100%] h-[20vh] flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-0'>
                    <div id="contact" className='flex sm:flex-row flex-col justify-center items-start md:items-center lg:items-start w-10/12 md:w-11/12 lg:w-2/3 xl:w-1/2 gap-6 xl:gap-12'>
                        <h1 className='text-sm md:text-xs lg:text-xl xl:text-2xl'><i className='bi bi-telephone text-base lg:text-lg xl:text-2xl border rounded-full py-2 xl:py-4 px-3 lg:px-4 lg:py-3 xl:px-5'></i>&nbsp;&nbsp; +92 305 9537746</h1>
                        <h1 className='text-sm md:text-xs lg:text-xl xl:text-2xl'><i className='bi bi-envelope text-base lg:text-lg xl:text-2xl border rounded-full py-2 xl:py-4 px-3 lg:px-4 lg:py-3 xl:px-5'></i> &nbsp;&nbsp;danitech057@gmail.com</h1>
                    </div>
                    <div id="icons" className='w-full md:w-1/2 lg:w-1/3 flex justify-center items-center gap-4'>
                        <Link href="https://instagram.com/danyal.ahmmd" ><i className='bi bi-instagram text-base  lg:text-lg xl:text-2xl border rounded-full py-2 xl:py-4 lg:py-3 lg:px-4 px-3 xl:px-5'></i></Link>
                        <Link href="https://www.linkedin.com/in/danyal-ahmed-web-developer/" ><i className='bi bi-linkedin text-base  lg:text-lg xl:text-2xl border rounded-full py-2 xl:py-4 lg:py-3 lg:px-4 px-3 xl:px-5'></i></Link>
                        <Link href="https://threads.com/danyal.ahmmd" ><i className='bi bi-threads text-base  lg:text-lg xl:text-2xl border rounded-full py-2 xl:py-4 lg:py-3 lg:px-4 px-3 xl:px-5'></i></Link>
                    </div>
                </div>
                    <div id="copyright" className='w-full h-auto sm:h-[5vh] flex justify-center items-center'>
                        <h1 className='text-[0.65rem] sm:text-xs'>© {n} Copyright by Danyal Ahmed - Developed by Danylix</h1>
                    </div>
        </div>
    </>
  )
}
