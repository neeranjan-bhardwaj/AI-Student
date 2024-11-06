"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useState } from 'react'
import { RoadMap } from './API/AI/AI'

const HomePage=()=>{
    return(
        <div className='h-full w-full flex flex-col gap-5 justify-center items-center'>
            <h1 className='font-bold text-4xl '>Start Your Journey</h1>
            <span className='flex gap-10'>
                <div className='w-28 h-36 border-2 border-black'></div>
                <div className='w-28 h-36 border-2 border-black'></div>
                <div className='w-28 h-36 border-2 border-black'></div>
                <div className='w-28 h-36 border-2 border-black'></div>
            </span>
        </div>
    )
}

const ResultPage=(Results)=>{
    return(
        Results.map(e=>{
            return(
                <div className='w-full h-full pt-5'>
                    <h1 className='font-semibold text-3xl text-center'>{e.Level}</h1>
                    <ul className='flex gap-3 flex-col ml-10 mt-10 '>
                        {e.Chapter.map(e=>{return(
                            <>
                            <li>{e.Topic} : {e.Explanation}</li>
                            </>
                        )})}
                    </ul>
                    <Link href={e.Resource} className='mt-3 ml-10 font-semibold'>Resource</Link>
                </div>
            )
        })
    )
}


const page = () => {
    const [Text,setText]=useState()
    const [Results,setResults]=useState([])
    const [Loader,setLoader]=useState(false)
    const [Home,setHome]=useState(true)
    const Generate=async()=>{
        const Chat=Text
        setText("");
        setHome(false)
        setLoader(true)
        const Data=await RoadMap(Chat)
        const cleanedData = Data.replace(/```json/g, "").replace(/```/g, "").trim(); //* trim the response to get only json and replace unwanted staff   
        const JsonResponse=await JSON.parse(cleanedData)
        setResults(JsonResponse)
        setLoader(false)
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
        <div className=' h-5/6 w-full overflow-x-auto '>
            {Home?HomePage():Loader?"Loading":ResultPage(Results)}                         
        </div>
        <div className=' h-12 w-96 flex gap-1 '>
            <Input type='text' placeholder='What you want learn today?' value={Text} onChange={(e)=>{setText(e.target.value)}} className='text-black' />
            <Button onClick={Generate}>Generate</Button>
        </div>
    </main>
    </div>
  )
}

export default page