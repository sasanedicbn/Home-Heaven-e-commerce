
const SideBarProducts = ({products}) => {
    console.log()
    return (
        <aside className="sidebar-container">
            <input type="text" id="search" placeholder="Search" className="search-input" />
            <h3 className="heading">Category</h3>
            <ul className="category-list">
            {/* treba setovati sve */}
              {products.map(product => {
              console.log([product.category])
              }
              )}
                {/* new setovati */}
                <li className="category-item active" data-category="All">All</li>
                <li className="category-item" data-category="living room">Living Room</li>
                <li className="category-item" data-category="bedroom">Bedroom</li>
                <li className="category-item" data-category="office">Office</li>
                <li className="category-item" data-category="kids">Kids</li>
                <li className="category-item" data-category="dining">Dining</li>
                <li className="category-item" data-category="kitchen">Kitchen</li>
            </ul>
            <h3 className="heading">Company</h3>
            <select className="company-select">
                <option value="All">All</option>
                <option value="liddy">Liddy</option>
                <option value="marcos">Marcos</option>
                <option value="caressa">Caressa</option>
                <option value="ikea">Ikea</option>
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
