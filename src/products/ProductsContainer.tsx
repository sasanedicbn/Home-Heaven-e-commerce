import { useState, useEffect } from 'react';
import Products from './Products';
import SideBarProducts from './SideBarProducts';
import Spinner from '../components/Spinner';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/productsFilters';

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  const getProducts = (product) => {
    dispatch(setProducts(product));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://www.course-api.com/react-store-products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        getProducts(data);
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleFilterSidebar = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="products-container">
          <SideBarProducts showFilter={showFilter} />
          <Products toggleFilterSidebar={toggleFilterSidebar} />
        </div>
      )}
    </>
  );
};

export default ProductsContainer;
