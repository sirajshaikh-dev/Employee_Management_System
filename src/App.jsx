import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'
import Header from './Components/Other/Header'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData]= useContext(AuthContext)
  // console.log('userData',userData)

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
    console.log('userData',userData);

    if (email=='admin@me.com' && password == '123') {
      setUser('admin')
      // console.log(user)
      localStorage.setItem("loggedInUser",JSON.stringify({role: 'admin'}))
    } else if(userData){
      const employee = userData.find((e)=>email == e.email && e.password== password)
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
      {
        user && 
          <Header 
            user={user} 
            changeUser={setUser} 
            loggedInUserData={loggedInUserData} 
          />
      }

        {!user ? <Login handleLogin={handleLogin}/> 
          : user == 'admin' ? <AdminDashboard /> 
          : user == 'employee'? <EmployeeDashboard loggedInUserData={loggedInUserData} />
          : (null)
            

          }
      </div>    
  </>
  )
}

export default App
