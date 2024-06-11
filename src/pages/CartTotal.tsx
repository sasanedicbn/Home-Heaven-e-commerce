import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Product } from "../types/types";

const CartTotal = () => {
    const products = useSelector((state:RootState) => state.cart.cart as Product[]);

    const subTotal = products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    const shippingFee = products.reduce((total, product) => {
        return total + (product.shipping ? 0 : 800); 
    }, 0);

    const orderTotal = subTotal + shippingFee;

    console.log('carttotalKOMPONENT', subTotal);
    return (
        <div className="cart-total">
            <div>
                <p className="cart-total-subtotal">SubTotal: </p>
                <span>${(subTotal / 100).toFixed(2)}</span>
            </div>
            <div>
                <p className="cart-total-fee">Shipping fee: </p>
                <span>${(shippingFee / 100).toFixed(2)}</span>
            </div>
            <div>
                <p className="orderTotal">OrderTotal: </p>
                <span>${(orderTotal / 100).toFixed(2)}</span>
            </div>  
        </div>
    );
};

export default CartTotal;
