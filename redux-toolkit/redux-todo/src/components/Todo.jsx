import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addtodo,
  removetodo,
  updatetodo,
  completedtodo,
} from "../redux/todoSlice";
import { NavLink } from "react-router-dom";
const Todo = () => {
  const [todo, setTodo] = useState("");
  let todolist = useSelector((state) => state.todo);
  todolist = todolist.filter((todo) => todo.completed === false);
  // console.log(todolist);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addtodo({
        item: todo,
        completed: false,
      })
    );
    setTodo("");
  };
  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const deleteHandler = (index) => {
    dispatch(removetodo(index));
  };
  const editHandler = (index) => {
    const edit = prompt("edit your todo");
    dispatch(updatetodo({ edit, index }));
  };
  const completedHandler = (index) => {
    dispatch(completedtodo(index));
  };
  return (
    <div className=" w-screen ">
      <h1 className="text-center text-5xl font-mono text-gray-800 mr-28 ">
        Todo App
      </h1>
      <h1 className=" absolute top-1 right-20 text-end text-3xl font-mono text-gray-800">
        {" "}
        <NavLink to="/completed">Completed List</NavLink>
      </h1>

      <div className="flex mt-10 flex-col justify-center items-center gap-5 ">
        <form className="flex gap-4" onSubmit={submitHandler}>
          <input
            type="text"
            name="todo"
            className="border-2 border-slate-400 w-96 h-14 "
            value={todo}
            onChange={changeHandler}
          />
          <input
            type="submit"
            value="ADD"
            className=" bg-black text-white text-xl cursor-pointer border-2 p-3 rounded-sm "
          />
        </form>
        {todolist.map((value, key) => {
          return (
            <div draggable className="flex flex-col gap-3">
              <div className="flex justify-between items-center border border-gray-300 p-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold w-36 ">{value.item}</p>
                <div className="flex space-x-4">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => {
                      completedHandler(key);
                    }}
                  >
                    Completed
                  </button>
                  <button
                    className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    onClick={() => editHandler(key)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={() => deleteHandler(key)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
