import  { useState, useEffect } from 'react';
import Products from './Products';
import SideBarProducts from './SideBarProducts';

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.course-api.com/react-store-products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('error')
      }
    };

    fetchData();
  }, []);
 console.log(products)

  return (
   <div className='products-container'>
      <SideBarProducts/>
     <Products products={products}/>
   </div>
  );
};

export default ProductsContainer;
