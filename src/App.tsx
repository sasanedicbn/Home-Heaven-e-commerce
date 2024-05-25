
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './pages/NavBar';
import { RefsProvider } from './pages/Refs/RefsProvider';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:   <RefsProvider><NavBar /></RefsProvider>,
      children:[
        {path:'/', element:<Home/>}
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
