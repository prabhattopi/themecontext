import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/Auth'
import { ThemeContext } from '../context/Authcontenxt'
import "./style.css"
export const Navbar = () => {
    const {isLight}=useContext(ThemeContext)
    const {login,users}=useContext(AuthContext)
  return (
    <nav className={isLight?"primary-nav":"darky"}>
        <NavLink className="Roti" to="/">Home</NavLink>
        <NavLink className="Roti" to="/about">About</NavLink>
        <NavLink className="Roti" to="/products">Products</NavLink>
        <NavLink className="Roti" to="/profile">Profile</NavLink>
        {
            !users&&(
                <NavLink className="Roti" to="/login">Login</NavLink>
            )
        }
    </nav>
  )
}
