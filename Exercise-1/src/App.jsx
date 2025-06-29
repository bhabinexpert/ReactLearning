import { useState } from 'react';
import './App.css'
import {v4 as uuid} from 'uuid';




function App() {

  const [todo, setTodo] = useState()
  const [todoList, setTodoList] = useState([])

  const onTodoInputChange =(e) => {
    setTodo(e.target.value)
  }
  const onAddToDoClick = ()=>{
    setTodoList([...todoList, {id: uuid(), todo: todo , isCompleted : false}])
    setTodo('')
  }
  const onDeleteClick =(id)=>{
    const updatedToDoList = todoList.filter(todo => todo.id !==id)
    setTodoList(updatedToDoList)
  }
  const onTodoCheckChange = (id )=>{
    setTodoList = todoList.map(todo =>todo.id === id? {...todo, isCompleted: !todo.isCompleted}:todo)
    setTodoList(updatedToDoList)
  }


  return (
    <>
    <div lassName = "app">
      <h1> My WishList</h1>
    </div>
    <div>
      <input value = {todo} onChange={onTodoInputChange} placeholder='Add your Wishlist' />
      <button onClick={onAddToDoClick}> Add </button>
    </div>
    <div>
      {
        todoList?.length > 0 && todoList.map( todo =>(
          <div key ={todo.id}>
            <label>
              <input onChange={() => onTodoCheckChange(todo.id)} type="checkbox" />
              <span className= {todo.isCompleted ? 'strike-through' : ''}> {todo.todo}</span>
            </label>
            <button onClick={()=> onDeleteClick(todo.id)}> Delete </button>
          </div>)
        )
      }
    </div>

    </>
  )
}

export default App
