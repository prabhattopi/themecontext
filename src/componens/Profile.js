import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Auth'
import "./style.css"
export const Profile = () => {
    const {users,logout}=useContext(AuthContext)
    const navigate=useNavigate()
    const handlelogout=()=>{
        logout()
        navigate("/")

    }
  return (
    <div className='roti'>
        Welcome: {users}
        <button style={{marginLeft:"10px"}} onClick={handlelogout}>LogOut</button>
    </div>

  )
}
