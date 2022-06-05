import { useContext } from "react";
import { Form } from "./componens/Form";
import "./componens/Theme.css"
import { ThemeContext } from "./context/Authcontenxt";
import {FaSun,FaMoon} from "react-icons/fa"
import { Navbar } from "./componens/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./componens/Home";
import { About } from "./componens/About";
import { Products } from "./componens/Products";
import { Profile } from "./componens/Profile";
import { Login } from "./componens/Login";
import { Required } from "./Hoc/Required";

function App() {
  const {toggleTheme,isLight}=useContext(ThemeContext)

  
  
  
  return (
    <>
    
    <div>
    <button onClick={toggleTheme}>{isLight?"Dark":"Light"}</button>
    <Navbar/>
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>

      <Route path="/profile" element={<Required><Profile/></Required>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
   
   </div>
   </>
  );
}

export default App;
