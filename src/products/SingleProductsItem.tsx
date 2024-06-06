import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleProductItem = () => {
    const { id } = useParams();
    console.log('5linija', id);
    
    const product = useSelector(state => 
        state.filters.products.find(product => product.id === id)
    );
    console.log(product);

    if (!product) {
        return <p>Product not found</p>;
    }

    const { category, company, description, image, name, price } = product;

    return (
        <div className="single-product-item">
            <div className="single-product-img">
                <button className="btn-backProduct">Back to Products</button>
                <img src={image} alt={name} />
            </div>
            <div className="single-product-description">
                <p className="single-product-name">{name}</p>
                <p className="single-product-price">${(price / 100).toFixed(2)}</p>
                <p className="single-product-description-text">{description}</p>
                <div className="single-product-data">
                    <p className="single-product-id">SKU:</p>
                    <span>{id}</span>
                </div>
                <div className="single-product-data border">
                    <p className="single-product-brand">Brand:</p>
                    <span>{company}</span>
                </div>
                <div className="single-product-order">
                    <div className="order-controls">
                        <button className="order-button">-</button>
                        <span className="number-orders">1</span>
                        <button className="order-button">+</button>
                    </div>
                    <div>
                        <button className="btn cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProductItem;

