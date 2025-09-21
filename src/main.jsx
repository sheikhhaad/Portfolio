import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import Detailpage from "./Pages/[Detailpage]";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: "Not Found Plz back",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "detailpage/:id",
        element: <Detailpage />,
      },
      {
        path: "/projects/detailpage/:id",
        element: <Detailpage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>);
