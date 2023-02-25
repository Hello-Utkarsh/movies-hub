import React from 'react'

function Rightwindow() {
    return (
        <div className='w-8/12 bg-black h-[100vh]'>
            <div className='flex mt-9 '>
                <input type="text" defaultValue={"Search"} className='w-[25%] bg-black text-gray-500 border-solid border-2 rounded-xl text-center border-gray-800 bg-gray-900' />
                <div className='ml-[53%] w-[13.5%] justify-between flex'>
                    <span class="material-symbols-outlined cursor-pointer transition ease-in hover:text-red-500 text-gray-500">
                        chat
                    </span>
                    <span class="material-symbols-outlined cursor-pointer transition ease-in hover:text-red-500 text-gray-500">
                        notifications
                    </span>
                    <img className='w-[32px] h-[32px] rounded-full' src="https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Rightwindow
