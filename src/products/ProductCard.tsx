import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { image, name, price, description, id } = product;
    console.log('products iz productCard', id)

    return (
        <article className="product-card">
            <Link to={`/products/${id}`}>
            <img src={image} alt={name} />
            </Link>
            <div className="product-info">
                <h5>{name}</h5>
                <span className="price">${(price / 100).toFixed(2)}</span>
            </div>
            <p className="description">{description}</p>
        </article>
    );
};

export default ProductCard;