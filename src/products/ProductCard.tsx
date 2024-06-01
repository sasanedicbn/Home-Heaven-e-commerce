const ProductCard = ({ product }) => {
    const { image, name, price, description } = product;

    return (
        <article className="product-card">
            <img src={image} alt={name} />
            <div className="product-info">
                <h2>{name}</h2>
                <span className="price">${(price / 100).toFixed(2)}</span>
            </div>
            <p className="description">{description}</p>
            <div className="btn-container">
                <button>Details</button>
            </div>
        </article>
    );
};

export default ProductCard;