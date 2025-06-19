import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter ]=useState(0);
const incCount=()=>{
  if(counter+1>20){
    alert("count cant cross 20");
  }
  else{
      setCounter(counter+1);
  console.log(counter+1);
  }

  

}  

const decCount=()=>{
  if(counter-1<0){
    alert("counter can not be negative")
  }
  else{
      setCounter(counter-1);

  }
}

  return (
    <>
    <h1> My Counter</h1>
    <h2>Counter : {counter}</h2>
    <div class="btngroup">
      <button onClick={incCount}>INC Count</button>
      <button onClick={decCount}>DEC Count</button>
      </div>   
    </>
  )
}

export default App
