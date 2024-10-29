"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [DarkMode,setDarkMode]=useState(true)
    return (
        <div className={DarkMode?"bg-black":null}>
            <nav className={`flex gap-72 ml-40 mt-4 font-semibold ${DarkMode?'text-white':null}`}>
                <h1>Zero AI</h1>
                <div className='flex gap-10'>
                    <Link href=''>Research</Link>
                    <Link href=''>About Us</Link>
                    <Link href=''>Safety</Link>
                </div>
                <div className='flex gap-5'>
                    <Button variant="Ghost" size="icon" onClick={()=>setDarkMode(!DarkMode)}>{DarkMode?<Moon/>:<Sun/>}</Button>
                    <Avatar>
                        <AvatarImage src='https://i.pinimg.com/564x/cc/84/e4/cc84e4ceaa62d62ffa9bebcc34193e58.jpg'/>
                        <AvatarFallback>Tc</AvatarFallback>
                    </Avatar>
                </div>
            </nav>
            <header className={`flex flex-col items-center font-bold ${DarkMode?'text-white':null}`}>
                    <h1 className='text-6xl text-center mt-28'>Get Answers. Find RoadMap <br/> Make your Way</h1>
                    <div className='flex items-center gap-10 mt-10'>
                        <Button><Link href='/AI'> Fuck AI </Link></Button>
                        <Button variant="outline">Document</Button>
                    </div>
            </header>
            <main className='flex flex-col items-center'>
                <h1 className='text-4xl text-center mt-32'>Get proper detail <br/> RoadMap</h1>
                {/* //! Chang this div to Image or img  */}
                <div className='w-[60rem] h-[30rem] mt-5  bg-slate-500 '></div>
            </main>
        </div>
    )
}

export default page