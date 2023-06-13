import { useContext } from "react";
import TodoContext from "../../ToDoContext";
import ItemInput from "../ItemInput";
import Item from "../Item";

const ActiveTab = () => {
  const { activeList } = useContext(TodoContext);

  return (
    <div>
      <ItemInput />
      <div className="mt-6 flex flex-col gap-4">
        {activeList.map((item, index) => (
          <Item key={index} completed={false} index={index} details={item} />
        ))}
      </div>
    </div>
  );
};

export default ActiveTab;
