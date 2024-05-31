import  { useState, useEffect } from 'react';

const Products = () => {
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
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
