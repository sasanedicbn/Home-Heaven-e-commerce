import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import ProductsContainer from './products/ProductsContainer';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar  />,
      children: [
        {path:'/products', element:<ProductsContainer/>},
        { path: '/', element: <Home  /> }
      ]
    }
  ]);

  return (
     <RouterProvider router={router} />
 
  );
}

export default App;

