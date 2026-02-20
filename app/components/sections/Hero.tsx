import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowUpLeft, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import TextType from '@/components/TextType'
import BlurText from '@/components/BlurText'
import AnimatedContent from '@/components/AnimatedContent'

import { WavyBackground } from '@/components/ui/wavy-background'
import { useTheme } from 'next-themes'

export default function Hero() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true)
    }, [])
   if (!mounted) return null

   const wavyColors = resolvedTheme === "dark" 
    ? ['#0D1B2A', '#1B263B', '#415A77'] 
    : ['#E2E8F0', '#CBD5E1', '#94A3B8'] 
  return (
   <main className='relative overflow-hidden bg-white dark:bg-[#0a0a0a]'>
        <WavyBackground 
            key={resolvedTheme}
            speed='fast'
            colors={wavyColors} 
            className='flex flex-col gap-10  items-center justify-center md:px-20 md:py-10 p-10  w-full  '
            backgroundFill= {resolvedTheme === "dark" ? "#0a0a0a" : "#FFFFFF"}>
                <BlurText 
                    delay={200}
                    animateBy="words"
                    direction="top"
                    
                    text="Belajar IT Tanpa Batas, Sesuai Ritmemu."
                    className='text-2xl md:text-4xl font-bold justify-center '
                />
                <BlurText 
                    text={'Racik modul belajarmu sendiri, tentukan timeline sesukamu, dan biarkan AI kami membimbing setiap langkahmu.'} 
                    animateBy="words"
                    direction="bottom"
                    delay={50}
                   
                    className='text-lg md:text-lg justify-center'
                />
                <AnimatedContent  distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}                   >
                    <div className='flex md:flex-row flex-col  gap-2 items-center'>
                            <Button variant={'default'} size={'lg'} className='w-auto text-md md:text-lg p-6 font-semibold shadow-md' asChild>
                                <Link href='/sign-in'> Mulai Belajar Sekarang
                                <ArrowUpRight/>
                                </Link>
                            </Button>
                            <Button variant={'outline'} size={'lg'} className='text-md md:text-lg p-6 font-semibold shadow-md w-full md:w-auto' asChild>
                                <Link href='/sign-in'> Lihat Kurikulum
                                <ArrowUpRight/>
                                </Link>
                            </Button>
                    </div>
                </AnimatedContent>
        </WavyBackground>
   </main>
  )
}
