import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/productsFilters";

const SideBarProducts = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters.filters);
    const products = useSelector(state => state.filters.products);

    const handleInputChange = (key, value) => {
        dispatch(setFilter({ key, value }));
    };

    // Filtriranje proizvoda na osnovu odabrane kategorije
    const filteredProducts = products.filter(product => {
        return filters.category === 'All' || product.category === filters.category;
    });

    return (
        <aside className="sidebar-container">
            <input type="text" id="search" placeholder="Pretraga" className="search-input" onChange={(e) => handleInputChange('search', e.target.value)} />
            <h3 className="heading">Kategorija</h3>
            <ul className="category-list">
                <li
                    className={`category-item ${filters.category === 'All' ? 'active' : ''}`}
                    onClick={() => handleInputChange('category', 'All')}
                >
                    Sve
                </li>
                {filteredProducts.map((category, index) => (
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
            <select className="company-select">
                <option value="All">All</option>
                {uniqueCompany.map((company, index) => (
                    <option key={index} value={company}>{company}</option>
                ))}
            </select>
            <h3 className="heading">Color</h3>
            <ul className="color-list">
                <button className="color-item active">All</button>
                <button className="color-item" style={{ backgroundColor: 'black' }}></button>
                <button className="color-item" style={{ backgroundColor: 'green' }}></button>
                <button className="color-item" style={{ backgroundColor: 'blue' }}></button>
                <button className="color-item" style={{ backgroundColor: 'orange' }}></button>
                <button className="color-item" style={{ backgroundColor: 'red' }}></button>
            </ul>
            <h3 className="heading">Price</h3>
            <div className="price-filter">
                <span className="price-amount">$3,099.99</span>
                <input type="range" className="price-range" min="0" max="309999" value="309999" />
            </div>
            <div className="shipping-filter">
                <h3 className="heading">Free Shipping</h3>
                <input type="checkbox" id="shipping" className="shipping-checkbox" />
            </div>
            <button className="clear-filters-btn">Clear Filters</button>
        </aside>
    );
};

export default SideBarProducts;
