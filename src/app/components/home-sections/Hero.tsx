import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
        <div id="hero-sec" className='w-full h-screen flex flex-col-reverse sm:flex-row justify-center items-center relative'>
            <div id="left" className='w-full sm:w-1/2 h-[50vh] sm:h-full flex flex-col justify-center items-center relative gap-8 sm:gap-[6rem]'>
                <div id="text" className='flex flex-col justify-center items-start relative ml-4  xl:ml-10'>
                    <h1 className='text-2xl md:text-4xl lg:text-[3.2rem] xl:text-7xl font-bold'>HELLO! I'M <br></br> DANYAL AHMED</h1>
                    <p className='text-sm lg:text-base text-gray-400 font-normal relative top-4 lg:top-8'>Web Developer (NextJS), WordPress / Shopify Developer</p>
                </div>
                <div id="button" className='flex justify-center items-center relative'>
                    <Button variant={'outline'} className='rounded-full h-[10vh] md:h-[8vh] w-[80vw] md:w-[40vw] lg:w-[25vw] xl:w-[15vw] text-xl'>Get Resume <i className='bi bi-download'></i></Button>
                </div>
            </div>
            <div id="right" className='w-full sm:w-1/2 h-[40vh] sm:h-[80vh] flex justify-center items-center relative'>
            <Image src="/me.png" className='w-[80vw] lg:w-[30vw] grayscale transition-all duration-1000' width={400} height={0} alt="Picture of the author" />
            </div>
        </div>
    </>
  )
}
