import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

// PAGINAS
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Layout from "./hoc/Layout";
import Entry from "./pages/Entry";

/*Routeo*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "entry",
        element: <Entry />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
