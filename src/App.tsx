
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './pages/NavBar';
import { useRef } from 'react';




function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element:  <NavBar heroRef={heroRef}/>,
      children:[
        {path:'/', element:<Home heroRef={heroRef}/>}
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
