import { useState,React, useEffect } from 'react';
import { Todo } from './Todo';

import { TodoData } from './TodoData';
import "../src/style.css"

const App=()=> {
  
  const[todos,setTodos]=useState(TodoData)
  const handleToggle=(id)=>{
    setTodos([
      ...todos.map((todo)=>
        todo.id === id ? {...todo, completed: !todo.completed}: {...todo}
      )
    ])

  }
  return (
    <div className="App">
      <header className='header'>
        <h1>Список задач: {todos.length}</h1>
      </header>
        <div className='styleBlock'>
        {todos.map((todo)=>{
          return (
            <Todo
            key={todo.id}
            todo={todo}
            toggleTask={handleToggle}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
