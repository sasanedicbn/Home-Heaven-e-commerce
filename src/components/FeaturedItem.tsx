const FeaturedItem = ({name,price,img}) => {
    return(
        <div className="container-featured-items">
        <article className="featured-product-card">
         <div className="featured-product-image">
             <a href='/'>
                 <img src={img} alt="featured-product"/>
             </a>
         </div>
         <div className="featured-product-description">
          <span className="featured-product-name">{name}</span>
          <span className="featured-product-price">{price}</span>
         </div>
        </article>
       </div>
    )
}
export default FeaturedItem;