
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({loggedInUserData}) => {
  console.log(loggedInUserData)
  return (
    <div className='pt-1 lg:px-10  '>
        <TaskListNumbers loggedInUserData={loggedInUserData}/>
        <TaskList loggedInUserData={loggedInUserData}/>
    </div>
  )
}

export default EmployeeDashboard