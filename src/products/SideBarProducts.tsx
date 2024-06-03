
const SideBarProducts = ({products}) => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    const uniqueCompany = [...new Set(products.map((product) => product.company))]
    console.log(uniqueCategories)
    console.log(uniqueCompany)
    return (
        <aside className="sidebar-container">
            <input type="text" id="search" placeholder="Search" className="search-input" />
            <h3 className="heading">Category</h3>
            <ul className="category-list">
                <li className="category-item active" data-category="All">All</li>
                {uniqueCategories.map((category, index) => (
                    <li key={index} className="category-item" data-category={category}>{category}</li>
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
