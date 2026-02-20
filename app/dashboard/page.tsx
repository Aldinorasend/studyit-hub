"use client"

import Hero from '../components/sections/Hero'
import Navbar from '../components/layout/Navbar'
export default function DashboardPage() {
  

  
  return (
   <main className='h-svh flex flex-col bg-[#0a0a0a] dark:bg-[#0a0a0a] border-none'>
      <Navbar />
      {/* Hero akan mengisi sisa layar */}
      <div className="flex-1 flex items-center justify-center">
        <Hero />
      </div>
    </main>
  )
}


