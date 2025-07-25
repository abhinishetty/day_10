import { useState,useMemo } from "react"
function FifthComp(){
const[count,setCount]=useState(0);
const[number,setNumber]=useState(0)
function expFunction(num){
    console.log("Expensive function called.........")
    
        for(let i=1;i<=100000;i++){
            return num*num
        }
    }
const result=useMemo(()=>expFunction(number),[number]) //dependent on number i.e whn number changes.only whn numb ris changes expensive function is called but not whn count is changes
   //if number is same no need to display agin
return (
        <div>
            <h1>Fifth component:</h1>
            <h2>Result:{result}</h2>
            <h3>Count: {count}</h3>
            <button onClick={()=>setCount(count+1)}>Updatecount</button>
            <h3>Number: {number}</h3>
            <button onClick={()=>setNumber(number+5)}>Update  number</button>
        </div>
    )
}
export default FifthComp