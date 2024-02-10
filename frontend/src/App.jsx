import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  //define a state variable
  const [todos, setTodos] = useState([]);
  //to get the data from the backend
  //use Effect hook is the better way to do this
  fetch("https://todo-react-js-74jd.onrender.com/todos")
  .then(async function(res) {
    const json = await res.json();
    setTodos(json.todos);
  });
  return (
      <div>
         {/* Hi There  */}
        <CreateTodo></CreateTodo>
        {/* made an error here <Todos> todos = {todos}</Todos> */}
        <Todos todos={todos}></Todos>
      </div>
  )
}

export default App
