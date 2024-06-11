import { useDispatch, useSelector } from "react-redux";
import { decreaseProduct, increaseProduct } from "../store/CartSlice";
import { Product } from "../types/types";
import { RootState } from "../store/store";

interface OrderControlsProps {
    id: string;
    product: Product;
}

const OrderControls = ({ id, product }: OrderControlsProps) => {
    const dispatch = useDispatch();

    const productInCart = useSelector((state: RootState) =>
        state.cart.cart.find((product: Product) => product.id === id)
    ) as Product | undefined;

    const increaseProductCartHandler = () => {
        dispatch(increaseProduct({ id, product }));
    };

    const decreaseProductCartHandler = () => {
        dispatch(decreaseProduct(id));
    };

    return (
        <div className="order-controls">
            <button className="order-button" onClick={decreaseProductCartHandler}>-</button>
            <span className="number-orders">{productInCart ? productInCart.quantity : 1}</span>
            <button className="order-button" onClick={increaseProductCartHandler}>+</button>
        </div>
    );
};

export default OrderControls;
