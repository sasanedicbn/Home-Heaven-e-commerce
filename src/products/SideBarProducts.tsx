import { useDispatch, useSelector } from "react-redux";
import { resetFilters, setFilter } from "../store/productsFilters";

const SideBarProducts = ({ showFilter }) => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.filters);
  const products = useSelector(state => state.filters.products);
  const initialFilters = useSelector(state => state.filters.products);

  const uniqueCategories = [...new Set(products.map(product => product.category))];
  const uniqueCompanies = [...new Set(products.map(product => product.company))];

  const handleInputChange = (key, value) => {
    dispatch(setFilter({ key, value }));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <aside className={`sidebar-container ${showFilter ? 'showFilters' : ''}`}>
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="search-input"
        onChange={(e) => handleInputChange('search', e.target.value)}
      />
      <h3 className="heading">Category</h3>
      <ul className="category-list">
        <li
          className={`category-item ${filters.category === 'All' ? 'active' : ''}`}
          onClick={() => handleInputChange('category', 'All')}
        >
          All
        </li>
        {uniqueCategories.map((category, index) => (
          <li
            key={index}
            className={`category-item ${filters.category === category ? 'active' : ''}`}
            onClick={() => handleInputChange('category', category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <h3 className="heading">Company</h3>
      <select
        className="company-select"
        onChange={(e) => handleInputChange('company', e.target.value)}
      >
        <option value="All">All</option>
        {uniqueCompanies.map((company, index) => (
          <option key={index} value={company}>{company}</option>
        ))}
      </select>
      <h3 className="heading">Color</h3>
      <ul className="color-list">
        <button className="color-item active" onClick={() => handleInputChange('color', 'All')}>All</button>
        <button className="color-item" style={{ backgroundColor: 'black' }} onClick={() => handleInputChange('color', 'black')}></button>
        <button className="color-item" style={{ backgroundColor: 'green' }} onClick={() => handleInputChange('color', 'green')}></button>
        <button className="color-item" style={{ backgroundColor: 'blue' }} onClick={() => handleInputChange('color', 'blue')}></button>
        <button className="color-item" style={{ backgroundColor: 'orange' }} onClick={() => handleInputChange('color', 'orange')}></button>
        <button className="color-item" style={{ backgroundColor: 'red' }} onClick={() => handleInputChange('color', 'red')}></button>
      </ul>
      <h3 className="heading">Price</h3>
      <div className="price-filter">
        <span className="price-amount">${filters.price / 100}</span>
        <input
          type="range"
          className="price-range"
          min="0"
          max="309999"
          value={filters.price}
          onChange={(e) => handleInputChange('price', Number(e.target.value))}
        />
      </div>
      <div className="shipping-filter">
        <h3 className="heading">Free Shipping</h3>
        <input
          type="checkbox"
          id="shipping"
          className="shipping-checkbox"
          checked={filters.shipping}
          onChange={(e) => handleInputChange('shipping', e.target.checked)}
        />
      </div>
      <button className="clear-filters-btn" onClick={handleResetFilters}>Clear Filters</button>
    </aside>
  );
};

export default SideBarProducts;

