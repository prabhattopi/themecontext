import React, { createContext,useState } from "react";
export const AuthContext=createContext()
export const AuthProvider=({children})=>{
  const [users, setusers] = useState(null)

  const login=(users)=>{
      setusers(users)
  }
  const logout=()=>{
      setusers(null)
  }
    return (
        <AuthContext.Provider value={{users,login,logout}}>
                {children}
        </AuthContext.Provider>
    )
}
