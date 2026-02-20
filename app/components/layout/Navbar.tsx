"use client"

import Link from 'next/link'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';
import {   MenuIcon } from 'lucide-react';
import { Sheet,SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const components = [
    {   
        id:'ai-path',
        titleKey: 'Artificial Intelligence (AI)',
        descriptionKey: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam possimus iure ullam aperiam modi numquam alias molestiae illo impedit veritatis. Et amet fugiat laborum reiciendis dignissimos rem voluptatibus nisi incidunt.'

    },
    {
        id:'web-path',
        titleKey: 'Web Developer ',
        descriptionKey: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam possimus iure ullam aperiam modi numquam alias molestiae illo impedit veritatis. Et amet fugiat laborum reiciendis dignissimos rem voluptatibus nisi incidunt.'

    },
    {
        id:'mob-path',
        titleKey: 'Mobile Developer ',
        descriptionKey: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam possimus iure ullam aperiam modi numquam alias molestiae illo impedit veritatis. Et amet fugiat laborum reiciendis dignissimos rem voluptatibus nisi incidunt.'

    },
    {
        id:'qa-path',
        titleKey: 'Quality Assurance ',
        descriptionKey: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam possimus iure ullam aperiam modi numquam alias molestiae illo impedit veritatis. Et amet fugiat laborum reiciendis dignissimos rem voluptatibus nisi incidunt.'

    }
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth >=  768) setIsOpen(false)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])



  return (
    <nav className='w-full flex gap-10 items-center justify-between py-4 md:px-20 px-4 relative  z-50'>
        <Link className='flex gap-4 items-center  p-4' href='/dashboard'>
            <Image src="/vercel.svg" alt="company logo" width={25} height={25} />
            <p className='font-bold'>StudyIt-Hub</p>
        </Link>

        {/* Navigation Selection */}
        <div className='hidden md:flex md:items-center md:gap-10'>
            <NavigationMenu >
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuLink asChild className=''>
                        <Link href="/dashboard" className={navigationMenuTriggerStyle()}>Dashboard</Link>
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem >
                        <NavigationMenuTrigger className=''>Learning Path</NavigationMenuTrigger>
                        <NavigationMenuContent className=' '>
                            <ul className='w-96 p-2 gap-2'>
                                {components.map((components) =>(
                                    <ListItem key={components.id} title={components.titleKey} href={`/learning-path/${components.id}`} className='hover:opacity-80'>
                                        {components.descriptionKey}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink asChild className=''>
                        <Link href="/about-us" className={navigationMenuTriggerStyle()}>About Us</Link>
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink asChild className=''>
                        <Link href="/contact" className={navigationMenuTriggerStyle()}>Contact</Link>
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
        <div className="hidden cta md:flex gap-2">
                <ThemeToggle/>
                <Button asChild><Link href='/sign-in' className='border border-color5'>Login</Link></Button>
                <Button variant='secondary'>Register</Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon-lg">
                        <MenuIcon />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side='right' className='flex flex-col p-4'>
                    <SheetTitle>
                        Menu
                    </SheetTitle>
                    <nav className="grid gap-6 text-lg font-medium mt-8">
                        <Link href="/dashboard" className="hover:text-primary">
                            Dashboard
                        </Link>
                                
                        <div className="flex flex-col gap-3">
                            <span className="font-semibold text-muted-foreground">Learning Path</span>
                                <div className="flex flex-col gap-2 pl-4 border-l">
                                    {components.map((item) => (
                                        <Link 
                                            key={item.id} 
                                            href={`/learning-path/${item.id}`}
                                            className="text-base text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {item.titleKey}
                                        </Link>
                                    ))}
                                </div>
                        </div>

                        <Link href="/about-us" className="hover:text-primary">
                            About Us
                        </Link>
                        <Link href="/contact" className="hover:text-primary">
                            Contact
                        </Link>
                    </nav>

                        {/* Mobile CTA */}
                        <div className="flex flex-col gap-2 mt-auto pb-4">
                            <Button asChild variant="outline" className="w-full">
                                <Link href='/sign-in'>Login</Link>
                            </Button>
                            <Button variant='secondary' className="w-full">
                                Register
                            </Button>
                        </div>
                        
                </SheetContent>
            </Sheet>
        </div>
    </nav>
   
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
