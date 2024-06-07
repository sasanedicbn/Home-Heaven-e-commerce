import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, decreaseProduct, increaseProduct } from "../store/CartSlice"

const OrderControls = ({id}) => {
    const dispatch = useDispatch()
    const product = useSelector(state => 
        state.filters.products.find(product => product.id === id)
    );
    const addItemToCartHandler = () => {
        dispatch(addItemToCart({...product, quantity: 1}))
    }
    const increaseProductCartHandler = () => {
        dispatch(increaseProduct(id))
    }
    const decreaseProductCartHandler = () => {
        dispatch(decreaseProduct(id))
    }
    return(
    <div className="order-controls">
         <button className="order-button" onClick={decreaseProductCartHandler}>-</button>
         <span className="number-orders">{productInCart ? productInCart.quantity : 1}</span>
        <button className="order-button" onClick={increaseProductCartHandler}>+</button>
    </div>
    )
}
export default OrderControls;