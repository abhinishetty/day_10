import Child from "./Child";
import { useRef } from "react";
function Parent(){
    let inputRef= useRef(null); // instead of useRef(); use null
    function handleButton(){
        inputRef.current.style.color="red"
    }
    return(
        <div>
            <h1>Parent component</h1>
            <Child ref={inputRef}/> 
            <button onClick={handleButton}> Update</button>
        </div>
    )
}
export default Parent;