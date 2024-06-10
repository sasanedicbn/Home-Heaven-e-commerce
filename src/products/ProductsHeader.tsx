import { useDispatch, useSelector } from "react-redux";
import { sortProduct } from "../store/productsFilters";
import { AiOutlineFilter } from "react-icons/ai";

const ProductsHeader = ({ toggleFilterSidebar }) => {
  const dispatch = useDispatch();

  const sortProductsHandler = (e) => {
    dispatch(sortProduct(e.target.value));
  };

  const products = useSelector(state => state.filters.filteredProducts.length);

  return (
    <div className="products-header">
      <p className="filter-icon" onClick={toggleFilterSidebar}>
        <AiOutlineFilter size={30} />
      </p>
      <p className="number-products"> {products} products found</p>
      <hr className="header-line"></hr>
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
