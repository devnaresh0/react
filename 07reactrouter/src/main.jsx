import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Children } from 'react'
import Contact from './components/contact/contact.jsx'
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,

// Children:[
//   {
//     path:"",element: <Home/>

//   },{
//     path:"about",
//     element: <About/>


//   },
//   {
//     path:"contact",
//     element:<Contact/>
//   }

// ],

//    }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout/>}
    
    >
  <Route path='' element={<About/>} />
  <Route path='' element={<Contact/>} />

    </Route>
  )

)

createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <RouterProvider router={router}/>
 </React.StrictMode>
)
