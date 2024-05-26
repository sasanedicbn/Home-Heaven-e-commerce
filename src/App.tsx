import  { useRef } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import { RefsProvider } from './pages/constants/constants';

function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar heroRef={heroRef} />,
      children: [
        { path: '/', element: <Home heroRef={heroRef} /> }
      ]
    }
  ]);

  return (
    <RefsProvider>
     <RouterProvider router={router} />
    </RefsProvider>
  );
}

export default App;

