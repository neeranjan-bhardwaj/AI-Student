import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <div className='w-[70rem] h-96 ml-24 rounded-3xl absolute top-[-12rem] bg-gradient-to-b from-[#0c0e2c61] to-[#4147b371] '></div>
      <nav className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">Smart AI</div>
        <div className="flex space-x-8 z-50">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/Smart-AI" className="hover:text-gray-400">
            Smart AI
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-40">
        <h1 className="text-6xl font-bold mb-4">
          Welcome To <span className="text-blue-500">SmartAI</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Welcome To</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          iaufghf iyuogeifgyuocveruiyogfer87tyferiyugveriuov eiurohv hu89oer
        </p>
        <div className="flex space-x-4">
          <Link href="/Smart-AI" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Smart AI
          </Link>
          <Link href="/https://github.com/neeranjan-bhardwaj/AI-Student" className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">
            Document
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page