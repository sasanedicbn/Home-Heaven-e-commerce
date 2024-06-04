import { useState, useEffect } from 'react';
import Products from './Products';
import SideBarProducts from './SideBarProducts';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../store/productsFilters';

const ProductsContainer = () => {
  const dispatch = useDispatch()
  // const products = useSelector(state => state.filters.products)
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProducts = (product) => {
     dispatch(setProducts(product))
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://www.course-api.com/react-store-products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        getProducts(data)
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="products-container">
          <SideBarProducts />
          <Products />
        </div>
      )}
    </>
  );
};

export default ProductsContainer;

