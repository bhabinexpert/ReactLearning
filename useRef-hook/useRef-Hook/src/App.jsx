import { useRef } from 'react' // returns the value of current object..
import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const timerRef = useRef('')
  

  const onStartClick = ()=>{
    timerRef.current=setInterval(()=>{
      setCount( count => count + 1)
    },1000)
  }

  const onStopClick = ()=>{
    clearInterval(timerRef.current)
  
    }
  
 

  return (
    <>
      <p> Count - {count}</p>
      <button onClick={onStartClick}> Start </button>
      <button onClick={onStopClick}> Stop</button>
    </>
  )
}

export default App
