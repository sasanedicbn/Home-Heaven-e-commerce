import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import ProductsHeader from "./ProductsHeader";

const Products = ({toggleFilterSidebar}) => {
    const filteredProducts = useSelector(state => state.filters.filteredProducts);

    return (
        <div className="products">
        <ProductsHeader toggleFilterSidebar={toggleFilterSidebar}/>
        <div className="product-grid">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
    );
};

export default Products;
