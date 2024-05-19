import FeaturedItem from "../components/FeaturedItem";

const FeaturedProducts = () => {
    return(
        <section className="section-featured-products">
         <div className="container-featured-products">
          <div className="featured-header">
           <h3 className="featured-header-title">FEATURED PRODUCTS</h3>
           <h4 className="featured-header-description">The art of modern living unlocked.</h4>
          </div>
          <div className="feturedItem">
           <FeaturedItem  name="Sofa Set" price="$1,299.99" img="public/FeturedProducts/product-1.jpeg"/>
           <FeaturedItem  name="Utopia Sofa" price="$799.99" img="public/FeturedProducts/product-16.jpeg"/>
           <FeaturedItem  name="Suede Armchair" price="$159.99" img="public/FeturedProducts/product-17.jpeg"/>
          </div>
          <div className="featured-btn-container">
            <a href="/">
                <button className="btn btn-featured">All Products</button>
            </a>
          </div>
         </div>
        </section>
    )
}
export default FeaturedProducts;