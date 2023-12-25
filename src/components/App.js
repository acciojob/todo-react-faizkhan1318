

import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

  const[todo, setTodo] = useState("");
  const[toDoList, setToDoList] = useState([]);
  const[id, setId] = useState(1);

  function addTodo(e){
    e.preventDefault();

    setToDoList([...toDoList, {id: id, title: todo}])
    setTodo("");
    setId(id+1)
  }
  function deleteToDo(delete_id){
    setToDoList(toDoList.filter((item)=> item.id !== delete_id));
  }
  return (
    <div>
        <h1>To-Do List</h1>
        <form onSubmit={addTodo}>
            <input type="text" placeholder="enter task" onChange={(e)=> setTodo(e.target.value)}
              value={todo}
            />
            <button type="submit">Add todo</button>
        </form>
        <ul>
          {
            toDoList.map((item)=>{
              return <li key={item.id}>{item.title}
                  <button onClick={()=>deleteToDo(item.id)}>Delete</button>
              </li>
            })
          }
        </ul>
    </div>
  )
}

export default App

