"use client"

import Hero from '../components/layout/Hero'
import Navbar from '../components/layout/Navbar'
export default function DashboardPage() {
  

  
  return (
   <main className='h-svh flex flex-col'>
      <Navbar />
      {/* Hero akan mengisi sisa layar */}
      <div className="flex-1 flex items-center justify-center">
        <Hero />
      </div>
    </main>
  )
}


