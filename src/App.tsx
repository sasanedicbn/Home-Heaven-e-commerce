import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import ProductsContainer from './products/ProductsContainer';
import { Provider } from 'react-redux';
import store from './store/store';
import SingleProductItem from './products/SingleProductsItem';
import Cart from './pages/Cart';
import { useRef } from 'react';

function App() {
  const heroRef = useRef<HTMLDivElement>(null); 

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar heroRef={heroRef} />, 
      children: [
        { path: '/products', element: <ProductsContainer /> },
        { path: '/', element: <Home heroRef={heroRef} /> }, 
        { path: '/products/:id', element: <SingleProductItem /> },
        { path: '/cart', element: <Cart /> }
      ]
    }
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;


