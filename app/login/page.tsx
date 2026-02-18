"use client";
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import React, { useState } from 'react'

function LoginPage() {
   const router = useRouter();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        const {error}= await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (error) {
            console.log(error);
        }else{
            router.push('/dashboard')
        }

   }



  return (
        <form onSubmit={handleLogin} className="p-10 space-y-4">
      <h1 className="text-2xl font-bold">Signup</h1>

      <input
        className="border p-2 w-full"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-black text-white px-4 py-2">
        Sign Up
      </button>
    </form>
  )
}

export default LoginPage