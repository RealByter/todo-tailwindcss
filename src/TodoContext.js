import { createContext } from "react";

const TodoContext = createContext({
  activeList: [],
  completedList: [],
  addItem: (details) => {},
  removeItem: (index) => {},
  setCompleted: (index) => {},
  setUncompleted: (index) => {},
  clearCompleted: () => {},
});

export default TodoContext;
