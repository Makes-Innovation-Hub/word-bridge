import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Words from "./Pages/Words/Words";
import Alphabatics from "./Pages/Alphabatics/Alphabatics";
import Menu from "./Components/Menu";
// import Test from "./Pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/alphabatics",
        element: <Alphabatics />,
      },
      {
        path: "/words",
        element: <Words />,
      },
      // {
      //   path: "/test",
      //   element: <Test />,
      // },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
