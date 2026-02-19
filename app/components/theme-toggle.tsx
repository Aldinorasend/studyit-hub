"use client"
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className='w-15 h-15' />

    return (
        <Button
            variant="outline"
            size="icon-lg"
            className="group relative flex items-center justify-center"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
            {/* Sun Icon */}
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all 
                scale-0 rotate-90 
                [.dark_&]:scale-100 [.dark_&]:-rotate-0" 
            />
            
            {/* Moon Icon */}
            <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all 
                scale-100 rotate-0 
                [.dark_&]:scale-0 [.dark_&]:rotate-90" 
            />
            
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}