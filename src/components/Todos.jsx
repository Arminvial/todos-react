import TodoList from "./TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';










export default function Todos() {
  const [todos, setTodos] = useState([
    {
      id : uuidv4() ,
      title : 'go to school and read books',
      status: true,
    },
    {
      id : uuidv4() ,
      title : 'go to gym at 17:00' ,
      status: false ,
    },
  ]);

  // const onInputNewTodoChangeHnadler = (event) => {
  //   console.log(event)
  // };

  const addNewTodoHandler = (event) => {
    // console.log (event.key)
    if (event.key == 'Enter') {
      // console.log("add a new todo");
      setTodos([
        ...todos,
        {
          id : uuidv4() ,
          title: event.target.value,
          status: false,
        },
      ]);
      event.target.value = '';
    }
  };

  const deleteTodoHandler = (todo)=> {
    let newTodos = todos.filter ((todoItem)=> {
      return todo.id != todoItem.id ;
    })
    setTodos(newTodos) ;
  }
  //باید برای حذف اول متغیر را در صفحه مادر ایجاد کنیم و صفحه به صفحه پاس بدیم به دیلیت ایکون

  const toggleTodoStatusHandler = (todo) => {
    let newTodos = todos.map((todoItem)=> {
      if(todo.id==todoItem.id) {
        todoItem.status = !todoItem.status
      }
      return todoItem;
    })
    setTodos(newTodos) ;
  }
  //تودویی که روش کلیک کردیم اگه با تودویی که داره پیمایش میکنه ایدی هاش یکی بود میاد استاتوسش رو نات میکنه



  const editTodoTitleHandler = (todo , newTitleVlaue) => {
    let newTodos = todos.map((todoItem)=> {
      if(todo.id==todoItem.id) {
        todoItem.title = newTitleVlaue
      }
      return todoItem;
    })
    setTodos(newTodos) ;
  }
  
  
  
  
  
  
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
        <div className="flex items-center mb-6">
          <h1 className="mr-6 text-4xl font-bold text-purple-600">
            {" "}
            TO DO APP
          </h1>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="What needs to be done today?"
            className="w-full px-2 py-3 border rounded outline-none border-grey-600"
            // onChange={onInputNewTodoChangeHnadler}
            onKeyDown={addNewTodoHandler}
          />
        </div>
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodoStatus={toggleTodoStatusHandler} editTodoTitle = {editTodoTitleHandler} />
      </div>
    </div>
  );
}
