import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({loggedInUserData}) => {
  console.log(loggedInUserData)
  return (
    <div className='px-4 sm:px-6 lg:px-10 bg-[#1c1c1c] min-h-screen  '>
        <Header loggedInUserData={loggedInUserData}/>
        <TaskListNumbers loggedInUserData={loggedInUserData}/>
        <TaskList loggedInUserData={loggedInUserData}/>
    </div>
  )
}

export default EmployeeDashboard