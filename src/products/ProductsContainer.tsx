import { useState, useEffect } from 'react';
import Products from './Products';
import SideBarProducts from './SideBarProducts';
import Spinner from '../components/Spinner';

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://www.course-api.com/react-store-products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data);
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
          <Products products={products} />
        </div>
      )}
    </>
  );
};

export default ProductsContainer;

