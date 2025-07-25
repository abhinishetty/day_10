import { useEffect } from "react";

function SecondComp(){
    useEffect(()=>{
        console.log("useEffect called.........");
    },[])
    return(
        <div>
            <h1>Second component useeffect hook</h1>
        </div>
    )
}
export default SecondComp