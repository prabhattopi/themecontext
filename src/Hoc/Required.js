import React, { useContext } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Auth'

export const Required = ({children}) => {
    const location =useLocation()
    const {login,logout,users}=useContext(AuthContext)
    const navigate=useNavigate({children})
    if(!users){
       return <Navigate to="/login" state={{path:location.pathname
    }} />

    }
  return children
      

  
}
