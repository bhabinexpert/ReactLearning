import './App.css'
import { useState } from 'react'

// React is declarative in nature..

const name = "Bhabin"
const element = <h2>I am learning React..</h2>
const Search = ()=> <input placeholder =" Sear your fav product"/> 
const Button = ()=> <button> Submit</button>
// let count = 0

// functionsl component should satrs with the first letter capital...and i must return JSX otherwiae it won't return a nything to the string..
const Header = ()=>{
  const [search, setSearch] = useState()
  const onSearchChange = (event) =>{
    setSearch(event.target.value)

  }
  return (
    <><div style={{backgroundColor:'blueviolet'}}>
    <h1> Musify</h1>
    <input onChange ={onSearchChange}placeholder = 'Search for music'/>
    <ul style={ { display:'flex', gap:'100px'}}>
      <li> Home</li>
      <li> About</li>
      <li> Contact us</li>
    </ul>
    </div>
    </>
  )
}
//  wee always change the list of products into objectd while rendering the webpage...

const AddButton = ()=>{

  const [count, setCount] = useState(0)
  setCount(count + 1)
  
  return(
    <button onClick={onIncrementClick}> Increment</button>
  )
}

const Decreasebtn = ()=>{
  return(
    <button> Decrement</button>
  )
}


function App() {
  
  const [value, setValue] = useState(0); // destructuring the useState method and keeping the initial value to 0.

 
  const onIncrementClick = ()=>{ //handeled the on click method
    setValue(value + 1); // changes the value by 1 every time the button is pressed.    
  }

  const onDecrementClick = ()=>{
    setValue(value - 1)
  }
  return (
    <>
    
    <div>
      <h1>Hello i am {name}</h1>
      {element}
      {/* <Button/> */}
      <div>
      {/* <Search/> */}
      </div>
      {/* <Header/> */}
      </div>

      <h2> Jsx</h2>
      <button onClick={onIncrementClick}> Increase</button>
      <button onClick={onDecrementClick}>Decrement</button>
      <p> The value is {value}</p>
      {/* the value is dispalyed in the ui */}
    
      
      
      
     
    </>
  )
}

export default App 
