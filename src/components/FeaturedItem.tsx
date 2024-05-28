const FeaturedItem = ({name,price,img}:{name:string,price:string,img:string}) => {
    console.log(name, img,                 price)
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