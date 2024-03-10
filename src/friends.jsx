import './Friends.css'
import Friend from './friend';
import { useEffect, useState } from "react"

export default function Friends(){
    const [friends,setFriends]=useState([]);

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
    } ,[])
    return(
        <div className='box'>
            <h3>Friends :{friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/*
* 1- State hold data
* 2- use effect with difendency array
* 3- use fetch or async await
* 4- set load data in the state
*/