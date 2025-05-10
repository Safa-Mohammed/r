import './App.css'
 
import Home from './Component/Home/Home';
 
import Experience from './Component/Experience/Experience';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import MasterLayout from './Component/MasterLayout/MasterLayout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
 import Work from './Component/Work/Work';

// Routing
const routes = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    errorElement:<NotFound/>, // also you can spicfy each page with notfound page 
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "experience", element: <Experience /> },
      { path: "work", element: <Work /> }
     
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
