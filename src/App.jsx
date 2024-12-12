import { useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'

function App() {

    useEffect(() => {
     setLocalStorage()
     getLocalStorage()
    }, [ ])
    
  return (
    <>
      <div>
          {/* <Login/> */}
          <EmployeeDashboard/>
          {/* <AdminDashboard/> */}
      </div>    
  </>
  )
}

export default App
