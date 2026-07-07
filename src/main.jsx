import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './Components/Hero.jsx'

import Contact from './Components/Contact.jsx'
import Education from './Components/Education.jsx'
import Resume from './Components/Resume.jsx'
import skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Skills from './Components/Skills.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const router=createBrowserRouter([

{path:"/",
  element:<App/>,
  children:[

    {index:true,
      element:<Hero/>
    },
    {path:"Contact",
      element:<Contact/>
    },
    {path:"Education",
      element:<Education/>
    },
    {path:"Resume",
      element:<Resume/>
    },
    {path:"Skills",
      element:<Skills/>
    },
    {
      path:"Projects",
      element:<Projects/>
    }


  ]
}




])

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}>
   
   </RouterProvider>
)
