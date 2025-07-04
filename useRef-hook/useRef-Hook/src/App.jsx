import { useEffect, useRef } from 'react' // returns the value of current object..
import './App.css'
import { useState } from 'react'
import { useReducer } from 'react'
// import { useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const timerRef = useRef('')

const [price, setPrice] = useState('')
const [discount, setDiscount] = useState('40')
const [rating, setRating] = useState('')

const initialState ={
  price:"",
  discount: '',
  rating: 4.5
}

const reducerFun =() =>{

}

const [ state, dispatch] = useReducer(reducerFun, initialState)
  

  


  useEffect (()=>{
    const url = 'https://dummyjson.com/products'
    fetch(url)
      .then(res => res.json())
      .then(data=> console.log(data))
  },) // [count] calls the api every time the page renders, [] calls the api only once
  

  const onStartClick = ()=>{
    timerRef.current=setInterval(()=>{
      setCount( count => count + 1)
    },1000)
  }

  const onStopClick = ()=>{
    clearInterval(timerRef.current)
    }
  
  const inputRef = useRef()
  const onFocusClick = ()=>{
    inputRef.current.focus()
  }
 

  return (
    <>
      <div>
        <input ref = {inputRef} placeholder='Search'/>
        <button onClick={onFocusClick}> Focus on Input</button>
      </div>
    <div>
      <p> Count - {count}</p>
      <button onClick={onStartClick}> Start </button>
      <button onClick={onStopClick}> Stop</button>
    </div>

    {/* useReducer HOOks */}
    <button onClick={()=> dispatch({type:'INCREMENT'})}> Inc</button>
    
    </>
  )
}

export default App
