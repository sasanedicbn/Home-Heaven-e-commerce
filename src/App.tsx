import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Products from './products/Products';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar  />,
      children: [
        {path:'/products', element:<Products/>},
        { path: '/', element: <Home  /> }
      ]
    }
  ]);

  return (
     <RouterProvider router={router} />
 
  );
}

export default App;

