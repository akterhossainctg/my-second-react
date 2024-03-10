import { useState } from "react"

export default function Team(){
   const [player,setPlayer] = useState(11);
   

   const handleAdd =()=>{
    const newPlayer = player + 1;
    setPlayer(newPlayer);
   }
   const handleRemove =() =>{
    const backPlayer = player - 1 ;
    setPlayer(backPlayer)
   }


   const teamStyle ={
    border:'2px solid aquamarine',
    margin:'20px',
    padding:'15px',
    borderRadius:'10px',
}
    return(
        <div style={teamStyle}>
            <h2>Team:{player}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}