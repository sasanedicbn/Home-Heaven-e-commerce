import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import ProductsContainer from './products/ProductsContainer';
import { Provider } from 'react-redux';
import store from './store/store';
import SingleProductItem from './products/SingleProductsItem';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar  />,
      children: [
        {path:'/products', element:<ProductsContainer/>},
        { path: '/', element: <Home  /> },
        {path: '/products/:id', element: <SingleProductItem/>}
      ]
    }
  ]);

  return (
    <Provider  store={store}>
     <RouterProvider router={router} />
     </Provider>
 
  );
}

export default App;

