import { useState, useContext } from "react";
import TodoContext from "../ToDoContext";

const ItemInput = () => {
  const [details, setDetails] = useState("");
  const { addItem } = useContext(TodoContext);

  return (
    <form
      className="mt-4 flex flex-wrap items-center"
      onClick={(e) => {
        e.preventDefault();
        if (details !== "") {
          addItem(details);
          setDetails("");
        }
      }}
    >
      <input
        className="w-full rounded-xl border-2 border-gray-300 px-2 py-3 outline-none sm:w-auto sm:grow-[3]"
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
        }}
        placeholder="add details"
      />
      <button
        className="mt-2 grow rounded-xl bg-blue-500 py-3 text-white shadow-md shadow-blue-200 outline-none transition-all duration-75 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 focus:bg-blue-600 focus:shadow-blue-200 active:translate-y-0 active:bg-blue-700 active:shadow-md sm:ml-4 sm:mt-0 "
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default ItemInput;
