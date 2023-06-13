import { useContext } from "react";
import TodoContext from "../../ToDoContext";
import Item from "../Item";
import DeleteAllButton from "../DeleteAllButton";

const CompletedTab = () => {
  const { completedList } = useContext(TodoContext);

  return (
    <>
      <div className="flex flex-col gap-4">
        {completedList.reverse().map((item, index) => (
          <Item
            key={index}
            completed={true}
            index={index}
            details={item}
            deletable
          />
        ))}
      </div>
      {completedList.length > 0 && <DeleteAllButton />}
    </>
  );
};

export default CompletedTab;
