import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route ,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home'
import Contact from './components/Contact'
import Github, { apiData } from './components/Github'
import Download from './components/Download'
import About from './components/About'



const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}>
            <Route path='contact' element={<Contact/>}/>
        </Route>
        <Route 
        loader={apiData}
        path='github' 
        element={<Github/>}/>
        <Route path='download' element={<Download/>}/>

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
