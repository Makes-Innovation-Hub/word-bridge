import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Words from "./Pages/Words/Words";
import Alphabatics from "./Pages/Alphabatics/Alphabatics";

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
