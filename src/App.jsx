import { useState } from "react";
import TodoContext from "./ToDoContext";

const App = () => {
  const [activeList, setActiveList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const filterByIndex = (list, index) => list.filter((item, i) => i !== index);

  const addItem = (details) => {
    setActiveList((oldList) => [...oldList, details]);
  };

  const removeItem = (index) => {
    setCompletedList((oldList) => filterByIndex(oldList, index));
  };

  const setCompleted = (index) => {
    const item = activeList[index];
    setActiveList((oldList) => filterByIndex(oldList, index));
    setCompletedList((oldList) => [...oldList, item]);
  };

  const setUncompleted = (index) => {
    const item = completedList[index];
    setCompletedList((oldList) => filterByIndex(oldList, index));
    setActiveList((oldList) => [...oldList, item]);
  };

  return (
    <TodoContext.Provider
      value={{
        activeList,
        completedList,
        addItem,
        removeItem,
        setCompleted,
        setUncompleted,
      }}
    ></TodoContext.Provider>
  );
};

export default App;
