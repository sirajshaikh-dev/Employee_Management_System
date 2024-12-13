import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const authData= useContext(AuthContext)
  // console.log(authData)

  const handleLogin=(email,password)=>{
    if (email=='admin@me.com' && password == '123') {
      setUser('admin')
      // console.log(user)
    } else if(authData && authData.employees.find((e)=>email == e.email && e.password== password)){
      setUser('employee')
      // console.log(user)
    }
    else{
      alert('invalid credential')
    }
    console.log(email,password)
  }
  // handleLogin('user@me.com',123)

    // useEffect(() => {
    //  setLocalStorage()
    //  getLocalStorage()
    // }, [ ])
    
    
  return (
    <>
      <div>
          { !user ? <Login handleLogin={handleLogin}/> : " "}
          { user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
      </div>    
  </>
  )
}

export default App
