import { useDispatch, useSelector } from "react-redux";
import { sortProduct } from "../store/productsFilters";
import { AiOutlineFilter } from "react-icons/ai";
import { RootState } from "../store/store"; 

interface ProductsHeaderProps {
  toggleFilterSidebar: () => void; 
}

const ProductsHeader = ({ toggleFilterSidebar }: ProductsHeaderProps) => { 
  const dispatch = useDispatch();

  const sortProductsHandler = (e: React.ChangeEvent<HTMLSelectElement>) => { 
    dispatch(sortProduct(e.target.value));
  };

  const products = useSelector((state: RootState) => state.filters.filteredProducts.length); 

  return (
    <div className="products-header ">
      <p className="filter-icon" onClick={toggleFilterSidebar}>
        <AiOutlineFilter size={30} />
      </p>
      <p className="number-products"> {products} products found</p>
      <hr className="header-line" />
      <div className="sort-products">
        <label>Sort by:</label>
        <select name="sort" id="sort" onChange={sortProductsHandler}>
          <option value="lowest">Price (Lowest)</option>
          <option value="highest">Price (Highest)</option>
          <option value="a-z">Name (A-Z)</option>
          <option value="z-a">Name (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
