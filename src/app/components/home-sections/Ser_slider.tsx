'use client'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Ser_slider() {

  const items = [
    {
      icon: 'bi bi-code-slash',
      title: 'Development',
      list: ['NextJS', 'NodeJS', 'MongoDB','WordPress', 'Shopify']
    },
    {
      icon: 'bi bi-bezier',
      title: 'UI/UX Design',
      list: ['Logo Designing', 'Thumbinal Designing', 'Adobe Illustrator']
    },
    {
      icon: 'bi bi-camera-video',
      title: 'Video Editing',
      list: ['Adobe Premier Pro', 'Adobe After Effects', 'Filmora']
    },
      {
      icon: 'bi bi-graph-up',
      title: 'Digital Marketing',
      list: ['Google / Meta Ads', 'Social Marketing', 'Email/SMS Marketing', 'SEO' ]
    }
  ]
    
  return (
    <>
      <div id="ser_slid" className='w-full h-[80vh] md:h-full lg:h-[80vh] flex justify-center items-center'>
      <Carousel opts={{
        align: "start",
        loop: true, 
      }}
      className="w-full">
           <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index} className='basis-[100%] md:basis-1/2 lg:basis-1/3 flex justify-center items-center'>
                <Card className='h-full flex flex-col gap-4 p-2 lg:p-8 w-[100vw] lg:w-[30vw] xl:w-[20vw] bg-[#fff]/80 text-[#0C1C46] rounded-none border-none'>
                  <CardHeader>
                    <i className={`${item.icon} text-5xl md:text-6xl lg:text-8xl`}></i>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className='text-xl md:text-2xl'>{item.title}</CardTitle>
                    <CardDescription>
                      <ul className='text-xs md:text-sm relative top-4 text-[#0C1C46]/80 flex flex-col gap-2 md:gap-4'>
                        {item.list.map((item, index) => (
                          <li key={index}><i className='bi bi-chevron-double-right text-xs lg:text-sm'></i>&nbsp;&nbsp;{item}</li>
                        ))}
                      </ul>
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='lg:-left-10' />
          <CarouselNext className='lg:-right-10' />
      </Carousel>
      </div>
  
    </>
  )
}
