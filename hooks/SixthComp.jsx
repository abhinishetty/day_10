import { useRef } from "react";
function SixthComp(){
    const inputRef=useRef();
function focus(){
   inputRef.current.focus(); //going to attach input feild inside DOM
   inputRef.current.value="React" //extra
   inputRef.current.style.color="green"//extra
   inputRef.current.style.display="none" //extra
}

    return(
        <div>
<h1>Sixth component</h1>
<input id="input" type="text" ref={inputRef}/><br></br>
<button onClick={focus}>Focus Input</button>
        </div>
    )
}
export default SixthComp;