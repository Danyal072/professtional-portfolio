import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"  
import Image from 'next/image'

interface PostProps {
    item: {
        id: number;
        category: string;
        date: string;
        thumbinal: string;
        title: string;
    }
}

export default function Post({item}: PostProps) {

    return (
   <>
    

        
            <Card className='flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-4 xl:gap-10 rounded-none bg-[#070e24] border-none'>
                <CardHeader>
                    <Image src={item.thumbinal} alt="post-thumbinal" className='w-[50vw] md:w-[20vw] lg:w-[10vw]' width={400} height={300} />
                </CardHeader>
                <CardContent>
                    <CardTitle className='flex flex-col gap-4 w-auto'>
                        <div id="top-date-area" className='text-xs sm:text-base font-normal'>
                            <h1>{item.category} &nbsp;| &nbsp; <span className='text-primary/50'>{item.date}</span></h1>
                        </div>
                        <h1 className='text-lg md:text-lg lg:text-xl xl:text-3xl'>{item.title}</h1>
                    </CardTitle>
                </CardContent>
                <CardFooter className='flex justify-center items-center w-full md:w-auto xl:w-[40%] gap-4 md:gap-10'>
                <Button variant={'outline'} className='rounded-full h-[6vh] md:h-[6vh] w-[80vw] md:w-[15vw] lg:w-[15vw] xl:w-[10vw] text-xl md:text-base lg:text-xl bg-transparent'>Read More</Button>
                </CardFooter>
            </Card>
    
    
   </>
  )
}
