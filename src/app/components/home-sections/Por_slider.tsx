'use client'
import React from 'react'
import Image from 'next/image'
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

export default function Por_slider() {

  var items = [
    {
        title: 'Alphotix Store - Ecommerce Website',
        img:'https://img.freepik.com/free-vector/shopping-online-landing-page-concept_23-2148539965.jpg?t=st=1737556416~exp=1737560016~hmac=68cdbc6d60ab6c49cbfcd05ecfbebd58f0b4bd998967c0117e7f35946369ff2f&w=1480',
        bg: 'https://img.freepik.com/free-vector/gradient-responsive-website-design_52683-89068.jpg?t=st=1737562192~exp=1737565792~hmac=9334a54c10267d44c47ded4c055c045593f37fdaa143b056d0a052653ae8f2bd&w=1480',
        category: ['React Js', 'Node Js', 'MongoDB'],
    },
    {
        title: 'Danylix - Logo Design',
        img:'https://img.freepik.com/free-psd/travel-adventure-landing-page_23-2149068736.jpg?t=st=1737556677~exp=1737560277~hmac=952c32ff49a87dce8e28ddd46c13878e6a2a8f3a69673231e88136311f3c5b1d&w=1800',
        bg: 'https://img.freepik.com/free-vector/gradient-responsive-website-design_52683-89068.jpg?t=st=1737562192~exp=1737565792~hmac=9334a54c10267d44c47ded4c055c045593f37fdaa143b056d0a052653ae8f2bd&w=1480',
        category: ['Logo Designing', 'Adobe Illustrator']
    },  
    {
        title: 'Danyal Ahmed - Portfolio Website',
        img:'https://img.freepik.com/free-psd/design-studio-landing-page-template_23-2148984208.jpg?t=st=1737556759~exp=1737560359~hmac=ef478661f3df72d5abb86b227427ac707377a3114be529f06454a0ed0ea91681&w=1800',
        bg: 'https://img.freepik.com/free-vector/gradient-responsive-website-design_52683-89068.jpg?t=st=1737562192~exp=1737565792~hmac=9334a54c10267d44c47ded4c055c045593f37fdaa143b056d0a052653ae8f2bd&w=1480',
        category: ['React Js', 'Next Js', 'Tailwind CSS', 'GSAP']
    }, 
    {
        title: 'Ziyarat - Travel Agency Website',
        img:'https://img.freepik.com/free-psd/travel-adventure-landing-page_23-2149068736.jpg?t=st=1737556677~exp=1737560277~hmac=952c32ff49a87dce8e28ddd46c13878e6a2a8f3a69673231e88136311f3c5b1d&w=1800',
        bg: 'https://img.freepik.com/free-vector/gradient-responsive-website-design_52683-89068.jpg?t=st=1737562192~exp=1737565792~hmac=9334a54c10267d44c47ded4c055c045593f37fdaa143b056d0a052653ae8f2bd&w=1480',
        category: ['WordPress', 'Elementor', 'WooCommerce']
    },
  ]
    
  return (
    <>
      <Carousel opts={{
        align: "start",
        loop: true, 
      }}
      className="sm:w-full relative">
           <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index} className='basis-[100%] h-full md:h-full lg:h-[calc(100%+5rem)] xl:h-full md:basis-1/2 flex justify-center items-center hover:cursor-grab active:cursor-grabbing'>
                <Card className='lg:h-full h-auto flex flex-col gap-0 sm:gap-4 w-[90vw] sm:w-[100vw] bg-[#09122d] rounded-none border-none'>
                  <CardHeader id='card-header-ch' className={`w-full h-full xl:h-[60vh] bg-blend-screen !bg-accent`}>
                    <Image src={item.img} alt={item.title} className='!w-[100%]' width={1920} height={0} />
                  </CardHeader>
                  <CardContent className='w-full lg:h-[15vh] flex flex-col gap-2 lg:gap-0 p-4 pb-4'>
                    <CardTitle className='w-full'><h1 className='text-sm md:text-base lg:text-lg xl:text-3xl'>{item.title}</h1></CardTitle>
                    <CardDescription>
                      <ul className='text-xs md:text-sm relative top-4 flex gap-2 md:gap-4'>
                        <li>{item.category.join(' / ')}</li>
                      </ul>
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious size={'iconLg'} className='-left-2 md:-left-9 lg:-left-20 lg:top-1/2 top-[13rem]' />
          <CarouselNext size={'iconLg'} className='-right-2 md:-right-8 lg:-right-20 lg:top-1/2 top-[13rem]' />
      </Carousel>
  
    </>
  )
}
