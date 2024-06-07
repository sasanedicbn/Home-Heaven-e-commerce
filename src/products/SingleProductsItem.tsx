import {  useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import OrderControls from "../pages/OrderControls";
import { addItemToCart } from "../store/CartSlice";

const SingleProductItem = () => {
    const { id } = useParams();
    const itemInCart = useSelector(state => state.cart.cart)
    console.log(itemInCart)
    
    const product = useSelector(state => 
        state.filters.products.find(product => product.id === id)
    );

    const productInCart = useSelector(state => 
        state.cart.cart.find((product) => product.id === id))
        console.log(productInCart)

    console.log(product);
    const addItemToCartHandler = () => {
        dispatch(addItemToCart({...product, quantity: 1}))
    }
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
                     <OrderControls id={id}/>
                    <div>
                       <Link to='/cart'><button className="btn cart" onClick={addItemToCartHandler}>Add to Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProductItem;

