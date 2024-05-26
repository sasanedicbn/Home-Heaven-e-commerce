import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './pages/NavBar';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar  />,
      children: [
        { path: '/', element: <Home  /> }
      ]
    }
  ]);

  return (
     <RouterProvider router={router} />
 
  );
}

export default App;

