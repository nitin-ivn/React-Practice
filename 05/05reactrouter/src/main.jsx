import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,
  createRoutesFromElements } from 'react-router-dom'
import Layout from './layout'
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element = {<Home />}/>
      <Route path='about' element = {<About />}/>
      <Route path='contact' element = {<Contact />} />
      <Route path='user/' element = {<User />}>
        <Route path=':userid' element = {<User/>}/>
      </Route>

      <Route 
      loader = {githubInfoLoader}
      path='github' 
      element  = {<Github />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
