import './App.css'

// React is declarative in nature..

const name = "Bhabin"
const element = <h2>I am learning React..</h2>
const Search = ()=> <input placeholder =" Sear your fav product"/> 
const Button = ()=> <button> Submit</button>

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
function App() {
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
     
    </>
  )
}

export default App
