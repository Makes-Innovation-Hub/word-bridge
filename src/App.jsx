import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Alphabatics from "./Pages/Alphabatics/Alphabatics";
import Words from "./Pages/Words/Words";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Add-shoe",
        element: <Alphabatics button="/alphabatics" />,
      },
      {
        path: "/words",
        element: <Words button="/words" />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
