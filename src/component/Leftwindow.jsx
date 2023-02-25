import React from 'react'

export default function leftwindow() {

  return (
    <div className='w-4/12 bg-black h-[100vh]'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='flex justify-between w-[100%] py-9 px-10'>
        <h1 className='text-white text-3xl font-semibold'>Movies<span className='text-red-500'> .Hub</span></h1>
        <div className='text-white'>
          <span className="material-symbols-outlined cursor-pointer transition ease-in hover:text-red-500" style={{ fontSize: '33px' }}>
            chevron_left
          </span>
          <span className="material-symbols-outlined cursor-pointer transition ease-in hover:text-red-500" style={{ fontSize: '33px' }}>
            chevron_right
          </span>
        </div>
      </div>
      <div className='px-10'>
        <h3 className='text-gray-500 flex flex-col text-lg'>News Feed</h3>
        <div className='news_feed_content px-2 py-5 flex items-center cursor-pointer'>
          <span className="icon material-symbols-outlined mt-1 transition ease-in-out text-gray-500 hover:text-red-400 duration-300" style={{ fontSize: '28px' }}>
            explore
          </span>
          <h2 className='icon-text text-gray-300 text-xl px-5 w-fit hover:text-gray-300'>Browse</h2>
        </div>
        <div className='news_feed_content px-1 py-5 flex items-center cursor-pointer'>
          <span className="icon material-symbols-outlined mt-1 transition ease-in-out text-gray-500 hover:text-red-400 duration-300" style={{ fontSize: '28px' }}>
            favorite
          </span>
          <h2 className='icon-text text-gray-300 text-xl px-5 hover:text-gray-300'>Watchlist</h2>
        </div>
        <div className='news_feed_content px-1 py-5 flex items-center cursor-pointer'>
          <span className="icon material-symbols-outlined mt-1 transition ease-in-out text-gray-500 hover:text-red-400 duration-300" style={{ fontSize: '28px' }}>
            calendar_month
          </span>
          <h2 className='icon-text text-gray-300 text-xl px-5 hover:text-gray-300'>Comg Soon</h2>
        </div>
      </div>
      <div className='px-10 py-10'>
        <h3 className='text-gray-500 flex flex-col text-lg'>Following</h3>
        <div className='px-2'>
          <div className=' py-5 flex'>
            <img className='w-[32px] h-[32px] rounded-full' src="https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h4 className='text-gray-500 px-5'>UserNAme</h4>
          </div>
          <div className=' py-5 flex'>
            <img className='w-[32px] h-[32px] rounded-full' src="https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h4 className='text-gray-500 px-5'>UserNAme</h4>
          </div>
          <div className=' py-5 flex'>
            <img className='w-[32px] h-[32px] rounded-full' src="https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h4 className='text-gray-500 px-5'>UserNAme</h4>
          </div>
          <div className=' py-5 flex'>
            <img className='w-[32px] h-[32px] rounded-full' src="https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h4 className='text-gray-500 px-5'>UserNAme</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
