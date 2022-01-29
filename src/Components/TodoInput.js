import React, { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import TodoLists from "./TodoLists";
import validator from "validator";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  // const [disabled, setdisabled] = useState(false);

  const validate = (inputText) => {
    setTodo(validator.ltrim(inputText));
  };
  const HandleTodoList = (e) => {
    e.preventDefault();
    // setdisabled(true);
    const newTodoList = [
      ...todoList,
      { todoList: todo, id: todoList.length + 1 } //changes
    ];
    setTodoList(newTodoList);

    setTodo("");
  };

  function handleDeleteClick(id) {
    const removeItem = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(removeItem);
    console.log(removeItem);
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center   py-28">
        <div className="flex justify-center space-x-2 items-center w-full md:w-4/6 lg:w-2/5 ">
          <input
            type="text"
            className="w-full py-6 text-base focus:outline-none rounded-lg border-2 text-gray-300 border-gray-600 px-2 bg-gray-900
          "
            placeholder="Enter Todos"
            value={todo}
            onChange={(e) => validate(e.target.value)}
          />
          <AiFillPlusSquare
            onClick={todo == "" ? null : HandleTodoList}
            className={
              todo == ""
                ? "text-4xl text-white cursor-pointer opacity-50"
                : " text-white text-4xl cursor-pointer"
            }
          />
        </div>
        <TodoLists todoList={todoList} handleDeleteClick={handleDeleteClick} />
      </div>
    </div>
  );
}

export default TodoInput;
