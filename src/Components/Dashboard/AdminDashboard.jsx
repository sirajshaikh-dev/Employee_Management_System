import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = () => {
  return (
    <div className='lg:p-7'>
        <CreateTask/> 
        <AllTask/>
    </div>
  )
}

export default AdminDashboard