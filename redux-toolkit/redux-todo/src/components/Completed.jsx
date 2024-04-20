import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo } from "../redux/todoSlice";
const Completed = () => {
  let Completed = useSelector((state) => state.todo);
  Completed = Completed.filter((todo) => todo.completed === true);
  const dispatch = useDispatch();
  const deleteCompleted = (index) => {
    dispatch(removetodo(index));
  };
  return (
    <div className=" flex flex-col gap-3">
      {Completed.map((value, index) => {
        return (
          <div className="flex justify-between items-center border border-gray-300 p-4 rounded-lg shadow-md">
            <p className="text-2xl font-bold">{value.item}</p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => deleteCompleted(index)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Completed;
