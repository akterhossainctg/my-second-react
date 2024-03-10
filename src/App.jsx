import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'
import Friend from './friend'

function App() {
 function handleClick (){
  alert('btn clicked')
 }
 function handleClickTwo(){
  alert('hey how are you kmn acho')
 }

  const addToFive =(num) =>{
    alert(num + 5)
  }
  return (
    <>
      
      <h1>React Explore javascript </h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onClick={handleClick}>Click me</button>
      <button onClick={handleClickTwo}>click two</button>
      <button onClick={()=>alert('hello third')}>Third</button>
      <button onClick={()=>addToFive(5)}>four</button> */}
      
      
    </>
  )
}

export default App
