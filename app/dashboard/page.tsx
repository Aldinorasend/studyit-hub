"use client"
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { Button, LoginButton } from '../components/ui/LoginButton';
import BuyButton from '../components/ui/BuyButton';

function DashboardPage() {
  const router = useRouter();
  useEffect(()=>{
      async function checkUser() {
        const {data} = await supabase.auth.getUser();
        if(!data.user){
          router.push("/login")
        }
      } 
      checkUser()
  }, [])
  return (
    <div className='p-10 flex gap-9'>
        <h1 className='text-2xl font-bold'>Dashboard - Protected</h1>
        <LoginButton
          onClick={async () => {
            await supabase.auth.signOut()
            router.push("/login")
          }}
        >
          Logout
        </LoginButton>
        <BuyButton onClick= {() => alert("halo")}>Halo</BuyButton>
    </div>
  )
}

export default DashboardPage