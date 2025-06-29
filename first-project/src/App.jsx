import './App.css'

// React is declarative in nature..

const name = "Bhabin"
const element = <h2>I am learning React..</h2>
const Search = ()=> <input placeholder =" Sear your fav product"/> 
const Button = ()=> <button> Submit</button>
let count = 0

// functionsl component should satrs with the first letter capital...and i must return JSX otherwiae it won't return a nything to the string..
const Header = ()=>{
  return (
    <><div style={{backgroundColor:'blueviolet'}}>
    <h1> Musify</h1>
    <input placeholder = 'Search for music'/>
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

function App() {

  const onIncrementClick = ()=>{ //handeled the on click method
    count = count + 1
    console.log({count})
    
  }
  return (
    <>
    
    <div>
      <h1>Hello i am {name}</h1>
      {element}
      <Button/>
      <div>
      <Search/>
      </div>
      <Header/>
      </div>

      <h2> Jsx</h2>
      <button id = 'btn' onClick={onIncrementClick}> Increase</button>

      
      
     
    </>
  )
}

export default App
