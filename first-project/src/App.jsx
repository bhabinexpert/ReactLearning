import './App.css'

// React is declarative in nature..

const name = "Bhabin"
const element = <h2>I am learning React..</h2>
function App() {
  return (
    <>
    <div>
      <h1>Hello i am {name}</h1>
      {element}
      
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
