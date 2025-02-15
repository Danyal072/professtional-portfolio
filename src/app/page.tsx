'use client'
import Header from "./components/Header";
import Hero from "./components/home-sections/Hero";
import Ser_slider from "./components/home-sections/Ser_slider";
import { Button } from "@/components/ui/button";
import Progress_sec from "./components/home-sections/progress";
import Por_slider from "./components/home-sections/Por_slider";
import Footer from "./components/Footer";
import Post from "./components/home-sections/post";
import database from "@/database/post.json";

export default function Home() {
  


  return (

      <>
      
        <div id="main" className="w-full h-full overflow-x-hidden flex flex-col gap-8">
          <Header />
          <div id="hero">
            <Hero />
          </div>
          <div id="second-page" className="w-full h-[70vh] md:h-full lg:h-screen px-[2rem] md:px-[3rem] xl:px-[10rem] ">
            <div id="top" className="w-full h-[10vh] md:h-full lg:h-[10vh] flex flex-col justify-center items-start gap-4 xl:gap-10">
              <h1 className="text-xl text-primary/80 font-light">|| &nbsp; My Services</h1>
              <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold">Services Provide For my Clients.</h1>
            </div>
            <div id="ser-slid" className="px-[1rem] lg:px-[0] relative">
                <Ser_slider />
            </div>
          </div>
          <div id="third-page" className="flex justify-center flex-col sm:flex-row items-center w-full md:!h-[calc(100%+5)] h-screen lg:h-screen px-[1rem] md:px-[2rem] xl:px-[10rem]">
            <div id="left-section" className="w-full h-[50vh] md:h-full lg:h-[50vh] sm:h-full sm:w-1/2 flex flex-col justify-center items-start gap-4 md:gap-10 lg:gap-36">
            <div id="text-sl" className="flex flex-col justify-center items-start gap-4 xl:gap-10">
              <h1 className="text-xl text-primary/80 font-light">|| &nbsp; Special Skills</h1>
              <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold">My Special Skill Field Here.</h1>
            </div>
              <div id="button" className='flex justify-center items-center relative'>
                    <Button variant={'outline'} className='rounded-full h-[6vh] md:h-[8vh] w-[80vw] md:w-[40vw] lg:w-[20vw] xl:w-[15vw] text-xl md:text-xl lg:text-lg xl:text-xl'>Get Resume <i className='bi bi-download'></i></Button>
                </div>
            </div>
            <div id="right-section" className="w-full h-[50vh] md:h-full md:w-1/2 flex flex-col justify-center items-center lg:gap-6 gap-6 md:gap-3">
                <Progress_sec name="Communication" indexs={50} />
                <Progress_sec name="Leadership" indexs={45} />
                <Progress_sec name="Teamwork" indexs={70} />
                <Progress_sec name="Flexibility" indexs={80} />
            </div>
          </div>

          <div id="fourth-page" className="flex justify-center flex-col sm:flex-col items-center w-full h-screen lg:h-screen md:h-full px-[0rem] md:px-[3rem] lg:px-[6rem]">
            <div id="top-section-bsps" className="w-[90%] h-[20vh] md:h-auto lg:h-[20vh] sm:w-full flex flex-col justify-center items-start gap-4 xl:gap-10">
              <h1 className="text-xl text-primary/80 font-light">|| &nbsp; Awesome Portfolio</h1>
              <h1 className="text-2xl md:text-3xl lg:text-7xl font-bold">My Complete Projects</h1>
            </div>
            <div id="bottom-section-bsps" className="w-[90%] h-[50vh] md:h-full lg:h-[80vh] sm:w-full flex justify-center items-center">
                <Por_slider />
            </div>
          </div>
          <div id="fifth-page" className="flex justify-center flex-col items-center w-full h-full md:h-[calc(100%+5)] xl:h-[100vh] lg:h-full px-[1rem] md:px-[3rem] lg:px-[4rem] xl:px-[10rem]">
            <div id="top-sec" className='w-[100%] h-[22vh] md:h-full lg:h-[22vh] xl:h-[30vh]'>
                  <div id="top-footer" className="w-full h-full flex flex-col justify-center items-center gap-4 md:gap-10">
                  <h1 className="text-xl text-primary/80 font-light">|| &nbsp; Blog Post</h1>
                  <h1 className="text-xl md:text-3xl lg:text-6xl font-bold">Latest Tips & Tricks</h1>
                  </div>
              </div>
              <div id="bottom-sec" className='xl:w-[80%] lg:w-[100%] w-[80%] md:w-full h-[100%] md:h-[calc(100%+5)] lg:h-full flex flex-col justify-center items-center lg:gap-4 xl:gap-6'>
                 
                    {database.blog_post.slice(0, 3).map((item) => (
                      <Post key={item.id} item={item} />
                    ))}

                  
              </div>
          </div>
          <Footer  />
        </div>
      </>
  );
}
