import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const RootLayout = () => {
  return (
    <div>
      <Sidebar />
      <main className="w-full h-full ">

        <Outlet />
      </main>
    </div>
  );
};
