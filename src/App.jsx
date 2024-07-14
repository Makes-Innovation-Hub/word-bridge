import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Alphabatics from "./Pages/Alphabatics/Alphabatics";
import Words from "./Pages/Words/Words";
import Test from "./Pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
