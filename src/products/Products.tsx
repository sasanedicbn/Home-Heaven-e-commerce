import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import ProductsHeader from "./ProductsHeader";
import { RootState } from "../store/store";
import { Product } from "../types/types";

type Productsprops = {
    toggleFilterSidebar: () => void; 
  }
const Products = ({toggleFilterSidebar}:Productsprops) => {
    const filteredProducts = useSelector((state:RootState) => state.filters.filteredProducts) as Product[];

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
