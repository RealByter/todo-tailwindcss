import { useState, useEffect } from "react";
import TodoContext from "./ToDoContext";
import "./App.css";
import useWindowDimensions from "./useWindowDimensions";
import Tabs from "./components/Tabs";

const App = () => {
  const [activeList, setActiveList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const windowDimensions = useWindowDimensions();

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

  const clearCompleted = () => {
    setCompletedList([]);
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
        clearCompleted,
      }}
    >
      <h1 className="mb-12 mt-6 text-center text-3xl font-bold">#todo</h1>
      <Tabs />
    </TodoContext.Provider>
  );
};

export default App;
