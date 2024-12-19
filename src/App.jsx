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

  useEffect(()=>{
    const loggedInUser= localStorage.getItem('loggedInUser') 
    if (loggedInUser) {
      const userData= JSON.parse(loggedInUser)
      console.log('userdata:',userData)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin=(email,password)=>{
    console.log('authdata',authData);
    // console.log('authdata.employees',authData?.employees);

    if (email=='admin@me.com' && password == '123') {
      setUser('admin')
      // console.log(user)
      localStorage.setItem("loggedInUser",JSON.stringify({role: 'admin'}))
    } else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && e.password== password)
      // console.log(employee)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role: 'employee', data:employee}))
      }
    // console.log(user)
    }
    else{
      alert('invalid credential')
    }
    console.log('email:',email, 'password:',password)
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
            ? <AdminDashboard changeUser={setUser}/> 
            : (user == 'employee'
              ? <EmployeeDashboard 
                loggedInUserData={loggedInUserData}
                changeUser={setUser}
              /> 
              : ''
            )

          }
      </div>    
  </>
  )
}

export default App
