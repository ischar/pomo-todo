import { searchbarContainerCls, sidebarContainerCls } from "../../utils/classNames";
import { Searchbar } from "../Searchbar";
export const Sidebar = () => {
  return (
  <div className={sidebarContainerCls}>
    <Searchbar />
    </div>
  );
};
