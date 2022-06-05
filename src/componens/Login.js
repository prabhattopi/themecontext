import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Auth'
import "./style.css"

export const Login = () => {
    const [user, setUser] = useState("")
    const {login,logout}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const redirectPath=location.state?.path||"/"

    const hanglelogin=()=>{
    login(user)
    navigate(redirectPath,{replace:true})
    
    }
    
  return (
      <div className='roti'>
    <label htmlFor="">
        Username:<input type="text"  onChange={(e)=>setUser(e.target.value)}></input>
    </label>
    <button onClick={hanglelogin}>Login</button>
    </div>
  )
}
