import ProductCard from "./ProductCard";
import ProductsHeader from "./ProductsHeader";

const Products = ({ products }) => {
    return (
        <div className="products">
        <ProductsHeader/>
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
    );
};

export default Products;