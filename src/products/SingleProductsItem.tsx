import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import OrderControls from "../pages/OrderControls";
import { addItemToCart } from "../store/CartSlice";
import { RootState } from "../store/store";
import { Product } from "../types/types";

const SingleProductItem = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();

    const product = useSelector((state: RootState) =>
        state.filters.products.find((product) => product.id === id)
    ) as Product | undefined;

    const productInCart = useSelector((state: RootState) =>
        state.cart.cart.find((product) => product.id === id)
    ) as Product | undefined;

    const addItemToCartHandler = () => {
        if (!productInCart && product) {
            dispatch(addItemToCart({ ...product, quantity: 1 }));
        }
    };

    if (!product) {
        return <p>Product not found</p>;
    }

    const { company, description, image, name, price } = product;

    return (
        <div className="single-product-item">
            <div className="single-product-img">
                <Link to="/products"><button className="btn-backProduct">←  Back to Products</button></Link>
                <img src={image} alt={name} />
            </div>
            <div className="single-product-description">
                <p className="single-product-name">{name}</p>
                <p className="single-product-price">${(price / 100).toFixed(2)}</p>
                <p className="single-product-description-text">{description}</p>
                <div className="single-product-data">
                    <p className="single-product-id">Available:</p>
                    <span>In stock</span>
                </div>
                <div className="single-product-data">
                    <p className="single-product-id">SKU:</p>
                    <span>{id}</span>
                </div>
                <div className="single-product-data border">
                    <p className="single-product-brand">Brand:</p>
                    <span>{company}</span>
                </div>
                <div className="single-product-order">
                {id && <OrderControls id={id} product={product} />}
                    <div>
                        <Link to='/cart'><button className="btn cart" onClick={addItemToCartHandler}>Add to Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProductItem;
