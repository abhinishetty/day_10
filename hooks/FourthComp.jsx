import { useState,useEffect } from "react";
function FourthComp(){
    const[count,setCount]=useState(0)
    const[theme,setTheme]=useState("light")
    useEffect(()=>{
        console.log("count effect called..")
        console.log(`count: ${count}`)
        
    },[count])  //try without [] and also [count]

     useEffect(()=>{
        console.log(" theme use effect called..")
       
        console.log(`Theme: ${theme}`)
    },[theme])


    return(
        <div>
            <h1>Fourth component:</h1>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button> <br></br>
            <h2>Theme:{theme}</h2>
            <button onClick={()=>setTheme(theme=='light'?'dark':'light')}>Change Theme</button>
        </div>
    )
}
export default FourthComp