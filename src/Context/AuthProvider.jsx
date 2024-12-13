import { createContext } from "react"

export const AuthContext= createContext()

const AuthProvider = ({children}) => {
  return (
    <div>
        <AuthContext.Provider value={'siraj'}>
             {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider