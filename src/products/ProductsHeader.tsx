const ProductsHeader = () => {
    return(
        <div className="products-header">
        <p className="number-products">22 products found</p>
        <hr className="header-line"></hr>
        <div className="sort-products">
         <label>Sort by:</label>
         <select name="sort" id="sort" >
           <option value="lowest">Price (Lowest)</option>
           <option value="highest">Price (Highest)</option>
           <option value="a-z">Name (A-Z)</option>
         <option value="z-a">Name (Z-A)</option></select>
        </div>
       </div>
    )
}
export default ProductsHeader;