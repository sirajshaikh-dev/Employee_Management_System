import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium text-left flex flex-col'>
            Hello
            <span className='text-3xl font-semibold'>Siraj 👋</span>
        </h1>
        <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header
