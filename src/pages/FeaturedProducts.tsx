import FeaturedItem from "../components/FeaturedItem";

const FeaturedProducts = () => {
    return(
        <section className="section-featured-products">
         <div className="container-featured-products">
          <div className="featured-header">
           <h3 className="featured-header-title">FEATURED PRODUCTS</h3>
           <h4 className="featured-header-description">The art of modern living unlocked.</h4>
          </div>"
           <FeaturedItem  name="Sofa Set" price="$1,299.99"/>
         </div>
        </section>
    )
}
export default FeaturedProducts;