import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { containerCls } from "./utils/classNames";
import { RootLayout } from "./components/common/RootLayout";
import { Main } from "./views/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
]);

function App() {
  return (
    <div className={containerCls}>
      <div className="h-full w-full">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
