import React from 'react'

const Home = () => {
  return (
    <div className='w-[80%] h-[80vh] mx-auto flex'>
      <div className='left w-1/2 h-full flex flex-col items-start justify-center'>
        <h1 className='text-6xl font-bold tracking-tight'>Cook Line a Pro with Our <span className='text-orange-600'>Easy</span> and <span className='text-orange-600'>Tasty</span> Recipes</h1>
        <p className='text-zinc-400 my-5'>Lorem ipsum dolor sit. ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit in tenetur nisi, ab nobis saepe.</p>
        <button className='px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-700 text-sm font-semibold text-white'>Explore all Recipes</button>
      </div>
      <div className='right w-1/2 h-full'>
        <img className="h-full w-full object-cover" src="https://img.freepik.com/premium-vector/detailed-chef-logo-template_23-2148986511.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home