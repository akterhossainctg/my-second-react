import { useState } from "react"


export default function Counter(){

   const [count, setCount] = useState(0)

   const handleClick = () =>{
    const newCount = count + 1;
    setCount(newCount);
   }
   const handleClickTwo =()=>{
    const previousCount = count - 1;
    setCount(previousCount);
   }
    return(
        <div style={{border:'2px solid tomato'}}>
            <h2>Counter: {count}</h2>
            <button onClick={handleClick}>Count</button>
            <button onClick={handleClickTwo}>Reduce</button>
        </div>
    )
}