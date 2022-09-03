import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-green-500'>Best Games</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-green-500'>Are</span> Shared</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://cdn.images.express.co.uk/img/dynamic/143/590x/modern-warfare-2-1619821.jpg?r=1654169727227" alt="/" />
        </div>
    </div>
  )
}

export default Hero