"use client"

import React, { useState } from 'react'
import { GetResult } from './AI'
const page = () => {
  const [Data,setData]=useState("")
  const [Result,setResult]=useState()
  return (
    <>
    <nav className='flex text-center'>
      <select className='w-28 hover:bg-[#D9D9D9] rounded-md drop-shadow-sm ml-5'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <h1 className='w-full text-center text-2xl '>Ai-Student</h1>
    </nav>
    <main>
      <input placeholder='Entry' value={Data} onChange={(e)=>{setData(e.target.value)}} />
      <button onClick={()=>setResult(GetResult(Data))}>Click</button>
      <p>{Result}</p>
    </main>
    </>
  )
}

export default page