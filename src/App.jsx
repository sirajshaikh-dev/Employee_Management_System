import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData= useContext(AuthContext)
  // console.log(authData)

  // useEffect(()=>{
  //   if (authData) {
  //     const loggedInUser= localStorage.getItem('loggedInUser') 
  //       if (loggedInUser) {
  //        setUser(loggedInUser.role) 
  //       }
  //   }
  // },[authData])

  const handleLogin=(email,password)=>{
    console.log(authData);
console.log(authData?.employees);

    if (email=='admin@me.com' && password == '123') {
      setUser('admin')
      // console.log(user)
      localStorage.setItem("loggedInUser",JSON.stringify({role: 'admin'}))
    } else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && e.password== password)
      console.log(employee)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role: 'employee'}))
      }
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
          { user == 'admin' 
            ? <AdminDashboard/> 
            : (user == 'employee'
              ? <EmployeeDashboard loggedInUserData={loggedInUserData}/> 
              : ''
            )

          }
      </div>    
  </>
  )
}

export default App
