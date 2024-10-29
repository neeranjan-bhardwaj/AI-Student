"use client"

import React, { useState } from 'react'
import { RoadMap } from '../AI' 
import { AvatarFallback, AvatarImage,Avatar } from '@/components/ui/avatar'

const page = () => {
  return (
    <div className='text-white '>
    <nav className='flex gap-96 justify-center '>
      <h1>LOGO</h1>
      <h1 className='text-4xl font-semibold '>Fuck AI</h1>
      <Avatar>
        <AvatarImage src='https://i.pinimg.com/enabled/564x/5b/57/db/5b57db1601865d751ada6b3e09eeb0cb.jpg'/>
        <AvatarFallback>TC</AvatarFallback>
      </Avatar>
    </nav>
    <main>
      <div></div>
    </main>
    </div>
  )
}

export default page