"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useState } from 'react'
import { RoadMap } from './AI'


const page = () => {
    const [Text,setText]=useState()
    const [Result,setResult]=useState()
    const [Loader,setLoader]=useState(true)
    const Generate=async()=>{
        // setResult(Text)
        // setResult(await RoadMap(Text));
        await RoadMap(Text)
        setText("");
    }
return (
    <div>
    <header className=' w-full text-white flex justify-between items-center pr-3 pl-3 pt-1'>
        <div>
            <img/>
            <h1 className='font-semibold text-xl'>Fuck Me</h1>
        </div>
        <nav className=' flex gap-5 text-lg '>
            <Link href='/'>Home</Link>
            <Link href='/RoadMap'>RoadMap</Link>
            <Link href='/Progress'>Progress</Link>
        </nav>
    </header>
    <main className=' flex flex-col justify-center items-center gap-2 h-[38rem] text-white '>
        <div className=' h-4/5 w-3/4  '>{Result}</div>
        <div className=' h-12 w-96 flex gap-1 '>
            <Input type='text' placeholder='What you want learn today?' value={Text} onChange={(e)=>{setText(e.target.value)}} className='text-black' />
            <Button onClick={Generate}>Generate</Button>
        </div>
    </main>
    </div>
  )
}

export default page