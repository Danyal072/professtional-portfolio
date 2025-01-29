import React from 'react'
import { Progress } from "@/components/ui/progress"


interface ProgressSecProps {
  name: string;
  indexs: number;
}

function Progress_sec({ name, indexs }: ProgressSecProps) {
  return (
    <>
        <div id="area" className='w-full md:w-[80%] lg:w-full xl:w-[80%] h-[15vh] md:h-[18vh] lg:h-[15vh] flex flex-col justify-center items-center relative gap-4 md:gap-0 lg:gap-10 bg-[#fff]/80'>
            <div id="inner_area" className='w-[80%] h-[100%] flex flex-col justify-center items-center relative gap-4 lg:gap-10'>
                <div id="text_area" className='flex justify-between items-start w-full'>
                    <h1 className='text-primary/50 text-base font-lgiht !text-[#0C1C46]'>{name}</h1>
                    <span className='text-primary/50 text-base font-lgiht !text-[#0C1C46]'>{indexs}%</span>
                </div>
                <Progress className='h-[0.4rem] sm:h-[0.3rem]' value={indexs} />
            </div>

        </div>
    </>
  )
}
export default Progress_sec
