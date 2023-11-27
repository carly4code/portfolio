import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Intro from './pages/intro';
import Contact from './pages/Contact';
import Portfoilo from './pages/Portfoilo';
import ProjectPage from './pages/ProjectPage';


const router = createBrowserRouter([
  {
    path: "/" || "/#home",
    element: <Home />,
  },
  {
    path: "/#about",
    element: <About />,
  },
  {
    path: "/#intro",
    element: <Intro />,
  },
  {
    path: "/#Contact",
    element: <Contact />,
  },
  {
    path: "/#portfoilo",
    element: <Portfoilo />,
  },
  {
    path: "project/:projectId",
    element: <ProjectPage/>,
  },
    {
    path: "project/1",
    element: <ProjectPage/>,
  },
]);
const baseUrl = 'https://carlyportfolio-890ca102755c.herokuapp.com/project';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
       <App/>

      <RouterProvider router={router} />
   </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
