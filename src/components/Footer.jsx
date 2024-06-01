import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-[80%] py-10 mx-auto bg-zinc-900 flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold text-white'>Cook.</h1>
        <p className='text-zinc-400 w-1/2 text-center my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam aperiam et quaerat iste pariatur corporis id. Voluptatem, optio. Veniam.</p>
        <div className='w-[60%] border border-zinc-600'></div>
        <div className='flex gap-x-10 my-10'>
            <Link to="/about" className='text-md text-zinc-400'>About Us</Link>
            <Link to="/about" className='text-md text-zinc-400'>Recipes</Link>
            <Link to="/about" className='text-md text-zinc-400'>Contact</Link>
        </div>
    </div>
  )
}

export default Footer