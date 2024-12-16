
const TaskListNumbers = ({loggedInUserData}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-4 gap-5 mt-10">
        <div className='rounded-xl   py-6 px-10  bg-blue-400 '>
            <h2 className='text-3xl font-semibold '>{loggedInUserData.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl  py-6 px-10  bg-green-400 '>
            <h2 className='text-3xl font-semibold '>{loggedInUserData.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl  py-6 px-10  bg-yellow-400 '>
            <h2 className='text-3xl font-semibold '>{loggedInUserData.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl  py-6 px-10  bg-red-400 '>
            <h2 className='text-3xl font-semibold '>{loggedInUserData.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumbers