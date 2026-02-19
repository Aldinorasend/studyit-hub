import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowUpLeft, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import TextType from '@/components/TextType'
import BlurText from '@/components/BlurText'

export default function Hero() {
  return (
   <main className='p-25  h-max '>
        <div className='flex  flex-col gap-8  text-center content-center items-center justify-center  px-20 py-10 rounded-2xl'>
                <BlurText 
                    delay={200}
                    animateBy="words"
                    direction="top"
                    text="Jembatan Belajar Coding Jadi Lebih Terarah"
                    className='sm:text-lg md:text-4xl font-bold'
                />
                <TextType 
                    text={'Dari pemula hingga mahir, StudyIt-Hub menyediakan ekosistem belajar IT dengan scaffolding cerdas untuk membantumu memecahkan masalah debugging dan membangun proyek nyata'} 
                    typingSpeed={45}
                    pauseDuration={1500}
                    showCursor
                    initialDelay={1800}
                    deletingSpeed={50}
                    loop={false}
                    className='md:text-lg'
                />
               <div className='flex gap-2 items-center'>
                    <Button variant={'default'} size={'lg'} className='w-auto text-lg p-6 font-semibold shadow-md' asChild>
                        <Link href='/sign-in'> Mulai Belajar Sekarang
                        <ArrowUpRight/>
                        </Link>
                    </Button>
                    <Button variant={'outline'} size={'lg'} className='text-lg p-6 font-semibold shadow-md' asChild>
                        <Link href='/sign-in'> Lihat Kurikulum
                        <ArrowUpRight/>
                        </Link>
                    </Button>
               </div>
        </div>
        
        
   </main>
  )
}
