import TiltedCard from '@/components/TiltedCard'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'


const subsPlan = [
    {
        id: '1',
        title: 'Free (Starter)',
        featureId: 'Modul Dasar, Akses Komunitas, 5 Pertanyaan AI/hari.',
        featureEn: 'Basic Modules, Community Access, 5 AI Questions/day.',
        price: 40000
    },
    {
        id: '2',
        title: 'Pro (Monthly)',
        featureId: 'Semua di Free, Racik Modul Custom, Unlimited AI Tutor, Timeline Adaptif.',
        featureEn: 'Everything in Free, Custom Module Crafting, Unlimited AI Tutor, Adaptive Timeline.',
        price: 40000

    },
    {
        id: '3',
        title: 'Elite (Yearly)',
        featureId: 'Hemat 20%, Akses Eksklusif Materi Baru, Sertifikat Digital, Konsultasi Prioritas.',
        featureEn: 'Save 20%, Exclusive Access to New Content, Digital Certificates, Priority Support.',    
        price: 40000

    }
]
export default function PricingCard() {
  return (
    <main className='text-center flex flex-col p-20 gap-2'>
        <h1 className='font-bold text-3xl'>Harga Langganan</h1>
        <h2 className='text-xl'>Mulai belajar dengan dukungan AI penuh.</h2>
        <ul className='grid md:grid-cols-3 grid-cols-1 gap-4 w-full md:py-20 md:px-40 p-10 '>
            {subsPlan.map(item => 
                <Card key={item.id} className='md:h-120 h-75 transition-transform duration-300 hover:scale-110 hover:shadow-xl  cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg'>
                    <CardHeader className='justify-center text-center'>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.featureId}</CardDescription>
                    </CardHeader>
                    <CardContent className='text-center justify-center flex flex-1 items-center '>
                        <div className="flex items-start"> 
                            <span className="text-sm md:text-xl mt-2 mr-1">Rp.</span> 
                            <span className='font-semibold text-4xl md:text-7xl leading-none'>
                                {item.price}
                            </span>
                        </div>
                    </CardContent>
                    <CardFooter className='text-center justify-center'>
                        <Button variant='outline' asChild>
                            <Link href={`plan/${item.id}`}>Berlangganan Sekarang</Link>
                        </Button>
                    </CardFooter>
                </Card>
            )}
        </ul>
       
    </main>
  )
}
