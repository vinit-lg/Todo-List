import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {

const todoItems = [
  {
  name : "Buy Milk",
  dueDate : "4/10/23",
},

{
  name : "Go To College",
  dueDate : "4/10/23",
},

{
  name : "Work in Progrss",
  dueDate : "4/10/23",
},

]



  return (
    <center className='todo-conatiner'>
    <AppName />
   <AddTodo />
   <TodoItems todoItems={todoItems} />
    </center>
  )
}

export default App;
