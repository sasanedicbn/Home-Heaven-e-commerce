const ProductCard = ({ product }) => {
    const { image, name, price, description } = product;

    return (
        <article className="product-card">
            <img src={image} alt={name} />
            <div className="product-info">
                <h5>{name}</h5>
                <span className="price">${(price / 100).toFixed(2)}</span>
            </div>
            <p className="description">{description}</p>
        </article>
    );
};

export default ProductCard;