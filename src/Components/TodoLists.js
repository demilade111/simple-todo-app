import React from "react";
import { AiFillDelete } from "react-icons/ai";

function TodoLists({ todoList, handleDeleteClick }) {
  return (
    <div
      className={
        todoList.length < 1
          ? "py-4 text-gray-300 w-1/2 lg:w-2/6"
          : "py-4 text-gray-300 w-1/2 lg:w-2/6 bg-gray-800 px-5"
      }
    >
      <div className="flex flex-col space-y-2 text-base">
        {todoList.map((todo, index) => (
          <ul
            key={index}
            className="flex justify-between item-center pl-7 bg-gray-900 px-3 py-5 rounded-xl  items-start "
          >
            <>{todo.todoList}</>
            <AiFillDelete
              onClick={() => handleDeleteClick(todo.id)}
              className="text-2xl text-blue-600 cursor-pointer"
            />
          </ul>
        ))}
      </div>
      
    </div>
  );
}

export default TodoLists;
