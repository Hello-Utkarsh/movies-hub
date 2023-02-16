import React from 'react'

export default function leftwindow() {

  // for changing the color of text and icon on hover
  let changecolor = ()=>{console.log("Hello")}
 
  return (
    <div className='w-4/12 bg-black h-[100vh]'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='flex justify-between w-[100%] py-9 px-10'>
        <h1 className='text-white text-3xl font-semibold'>Movies<span className='text-red-500'> .Hub</span></h1>
        <div className='text-white'>
          <span className="material-symbols-outlined" style={{ fontSize: '33px' }}>
            chevron_left
          </span>
          <span className="material-symbols-outlined" style={{ fontSize: '33px' }}>
            chevron_right
          </span>
        </div>
      </div>
      <div className='px-10'>
        <h3 className='text-gray-500 flex flex-col text-xl'>News Feed</h3>
        <div onMouseOver={changecolor()} className='news_feed_content px-1 py-5 flex items-center cursor-pointer'>
          <span className="icon material-symbols-outlined mt-1 transition ease-in-out text-gray-500 hover:text-red-400 duration-500" style={{ fontSize: '28px' }}>
            explore
          </span>
          <h2 className='icon-text text-gray-500 text-xl px-5 hover:text-gray-300'>Browse</h2>
        </div>
        <div className='news_feed_content px-1 py-5 flex items-center cursor-pointer'>
          <span className="icon material-symbols-outlined mt-1 transition ease-in-out text-gray-500 hover:text-red-400 duration-500" style={{ fontSize: '28px' }}>
            favorite
          </span>
          <h2 className='icon-text text-gray-500 text-xl px-5 hover:text-gray-300'>Watchlist</h2>
        </div>
        <div className='news_feed_content px-1 py-5 flex items-center cursor-pointer'>
          <span className="icon material-symbols-outlined mt-1 transition ease-in-out text-gray-500 hover:text-red-400 duration-500" style={{ fontSize: '28px' }}>
            calendar_month
          </span>
          <h2 className='icon-text text-gray-500 text-xl px-5 hover:text-gray-300'>Comg Soon</h2>
        </div>
      </div>
    </div>
  )
}
