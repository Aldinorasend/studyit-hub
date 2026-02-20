"use client"


import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import PricingCard from "./components/sections/PricingCard";

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col '>
      <Navbar />
      <div className="w-full">
          <Hero />
      </div>
      <PricingCard />
    </main>
  );
}
