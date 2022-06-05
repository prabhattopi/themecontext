import { useContext } from "react";
import { Form } from "./componens/Form";
import "./componens/Theme.css"
import { ThemeContext } from "./context/Authcontenxt";
import {FaSun,FaMoon} from "react-icons/fa"

function App() {
  const {toggleTheme,isLight}=useContext(ThemeContext)

  
  
  
  return (
    <>
    
    <div>
    <button onClick={toggleTheme}>{isLight?"Dark":"Light"}</button>
   
   </div>
   </>
  );
}

export default App;
