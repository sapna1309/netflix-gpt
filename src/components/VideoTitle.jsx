import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='text-lg w-1/3 pt-6'>{overview}</p>
        <div className='flex gap-4 mt-8'>
            <button className='bg-white py-1 hover:cursor-pointer hover:bg-opacity-80 px-8 rounded-md text-lg font-bold text-black'>Play</button>
            <button className='bg-gray-500 py-1 px-8 rounded-md text-lg font-semibold bg-opacity-60'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;