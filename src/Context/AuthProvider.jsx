import { createContext,useEffect,useState } from "react"
import { getLocalStorage } from "../Utils/localStorage"

export const AuthContext= createContext()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)

    // const data= getLocalStorage()
    // console.log(data)
    useEffect(()=>{
        const {employees, admin}= getLocalStorage()
        setUserData({employees,admin})
    },[])    

  return (
    <div>
        <AuthContext.Provider value={userData}>
             {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider