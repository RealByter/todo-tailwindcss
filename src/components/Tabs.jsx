import { Tab } from "@headlessui/react";
import AllTab from "./tabs/AllTab";
import ActiveTab from "./tabs/ActiveTab";
import CompletedTab from "./tabs/CompletedTab";

const Tabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="mb-4">
        <StyledTab>All</StyledTab>
        <StyledTab>Active</StyledTab>
        <StyledTab>Completed</StyledTab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <AllTab />
        </Tab.Panel>
        <Tab.Panel>
          <ActiveTab />
        </Tab.Panel>
        <Tab.Panel>
          <CompletedTab />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

const StyledTab = (props) => (
  <Tab className="relative w-1/3 overflow-hidden border-b border-b-gray-300 pb-3 text-sm font-bold after:absolute after:-bottom-5 after:left-1/2 after:block after:h-6 after:w-1/2 after:-translate-x-1/2 after:rounded-lg after:bg-transparent hover:after:bg-blue-200 focus:outline-none ui-selected:after:bg-blue-500 ui-focus-visible:after:bg-blue-700">
    {props.children}
  </Tab>
);

export default Tabs;
