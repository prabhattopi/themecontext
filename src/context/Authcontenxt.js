import React, { createContext, useContext,useState } from "react";
export const ThemeContext=createContext()
export const ThemeProvider=({children})=>{
   const [theme, setTheme] = useState("light")
   const toggleTheme=()=>{
    let body=document.querySelector("body")
    
  
       if(theme=="light"){
           setTheme("dark")
           body.classList.add("Dark")
       }
       else{
           setTheme("light")
           body.classList.remove("Dark")
       }
  

   }


    return (
        <ThemeContext.Provider value={{theme,isLight:theme==="light",toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}