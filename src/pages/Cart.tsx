import { useDispatch, useSelector } from "react-redux";
import OrderControls from "./OrderControls";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { removeItemFromCart } from "../store/CartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cart);
    console.log(cartItems)
    const deteleProductfromCart = (id) => {
        dispatch(removeItemFromCart(id))
    }
    if(cartItems === 0){
        <p>Your cart is empy.</p>
    }
    return (
        <div className="cart-container">
            <div className="cart-titles">
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            {cartItems.length === 0 ?(
                 <p className="empty-cart-message">Your cart is empty.</p>
            ):(cartItems.map(item => (
                <div className="cart-details" key={item.id}>
                    <div className="cart-details-img">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                    <p>${(item.price / 100).toFixed(2)}</p>
                    <OrderControls id={item.id} />
                    <p>${((item.price * item.quantity) / 100).toFixed(2)} <span onClick={() => deteleProductfromCart(item.id)}> <MdDelete /></span></p>
                </div>
            )))}
            <div className="cart-btns">
               <Link to='/products'><button className="btn continue-shopping">Continue Shopping</button></Link>
                <button className="btn clear-shopping">Clear Shopping Cart</button>
            </div>
        </div>
    );
};

export default Cart;
