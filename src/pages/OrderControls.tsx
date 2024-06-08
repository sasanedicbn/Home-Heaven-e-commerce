import { useDispatch, useSelector } from "react-redux"
import {  decreaseProduct, increaseProduct } from "../store/CartSlice"

const OrderControls = ({id}) => {
    const dispatch = useDispatch()
  
    const productInCart = useSelector(state => 
        state.cart.cart.find((product) => product.id === id))
   
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