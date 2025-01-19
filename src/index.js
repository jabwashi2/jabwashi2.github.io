import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectCategoriesPage from './pages/ProjectCategoriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
// import { SectionPage } from "./pages/SectionPage";
import {ProjectPage} from './pages/ProjectPage'
import {WebPage} from './pages/WebPage'
import { UnityPage } from "./pages/UnityPage";
import { DX11Page } from "./pages/DX11Page";

// an array of objects, can create a function that will generate this array based on the project categories
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/Projects",
    element: <ProjectCategoriesPage />
  },
  {
    path: "/#about",
    element: <AboutPage />
  },
  {
    path: "/#contact",
    element: <ContactPage />
  },
  {
    path: "/Web-Projects",
    element: <WebPage />
  },
  {
    path: "/Web-Projects/:id",
    element: <ProjectPage />
  },
  {
    path: "/Unity-Projects",
    element: <UnityPage />
  },
  {
    path: "/Unity-Projects/:id",
    element: <ProjectPage />
  },
  {
    path: "/DirectX11-Projects",
    element: <DX11Page />
  },
  {
    path: "/DirectX11-Projects/:id",
    element: <ProjectPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
