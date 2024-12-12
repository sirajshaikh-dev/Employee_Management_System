import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <div className='rounded-xl   py-6 px-10  bg-red-400 '>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl  py-6 px-10  bg-blue-400 '>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl  py-6 px-10  bg-green-400 '>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl  py-6 px-10  bg-yellow-400 '>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumbers