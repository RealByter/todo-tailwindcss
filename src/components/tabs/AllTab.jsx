import { useContext } from "react";
import TodoContext from "../../ToDoContext";
import ItemInput from "../ItemInput";
import Item from "../Item";

const AllTab = () => {
  const { activeList, completedList } = useContext(TodoContext);

  return (
    <div>
      <ItemInput />
      <div className="mt-6 flex flex-col gap-4">
        {activeList.map((item, index) => (
          <Item key={index} completed={false} index={index} details={item} />
        ))}
        {completedList.reverse().map((item, index) => (
          <Item key={index} completed={true} index={index} details={item} />
        ))}
      </div>
    </div>
  );
};

export default AllTab;
