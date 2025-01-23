import React from 'react'
import { Progress } from "@/components/ui/progress"


interface ProgressSecProps {
  name: string;
  indexs: number;
}

function Progress_sec({ name, indexs }: ProgressSecProps) {
  return (
    <>
        <div id="area" className='w-full md:w-[80%] lg:w-full xl:w-[80%] h-[15vh] flex flex-col justify-center items-center relative gap-4 md:gap-10 bg-[#0c1c46]'>
            <div id="inner_area" className='w-[80%] h-[100%] flex flex-col justify-center items-center relative gap-4 md:gap-10 bg-[#0c1c46]'>
                <div id="text_area" className='flex justify-between items-start w-full'>
                    <h1 className='text-primary/50 text-base font-lgiht'>{name}</h1>
                    <span className='text-primary/50 text-base font-lgiht'>{indexs}%</span>
                </div>
                <Progress className='h-[0.4rem] sm:h-[0.3rem]' value={indexs} />
            </div>

        </div>
    </>
  )
}
export default Progress_sec
