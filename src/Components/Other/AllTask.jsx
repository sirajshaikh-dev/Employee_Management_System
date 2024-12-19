import { useContext } from "react"
import { AuthContext } from "../../Context/AuthProvider"

const AllTask = () => {

    const authData = useContext(AuthContext)
    console.log('authData',authData)

  return (
    <div id='alltask' className='bg-[#1c1c1c] p-5 mt-5'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className="text-lg font-medium w-1/5">Name</h2>
            <h3 className="text-lg font-medium w-1/5">New Task</h3>
            <h5 className="text-lg font-medium w-1/5">Active Task</h5>
            <h5 className="text-lg font-medium w-1/5">Completed</h5>
            <h5 className="text-lg font-medium w-1/5">Failed</h5>
        </div>
        <div className="">
            {authData.employees.map((element)=>(
                <div key={element.id} 
                className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between">
                    <h2 className="text-lg font-medium w-1/5 text-blue-100">{element.firstName}</h2>
                    <h3 className="text-lg font-medium w-1/5 text-blue-400">{element.taskCounts.newTask}</h3>
                    <h5 className="text-lg font-medium w-1/5 text-yellow-400">{element.taskCounts.active}</h5>
                    <h5 className="text-lg font-medium w-1/5 text-green-400">{element.taskCounts.completed}</h5>
                    <h5 className="text-lg font-medium w-1/5 text-red-400">{element.taskCounts.failed}</h5>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllTask