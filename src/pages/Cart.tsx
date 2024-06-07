const Cart = () => {
    return(
        <div className="cart-container">
            <div className="cart-titles">
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            <div className="cart-details">
                <div className="cart-details-img">
                    {/* <img src=""/> */}
                    <p>dd</p>
                    <p>name</p>
                </div>
                <p>$120.00</p>
                <p>Quanity</p>
                <p>$240.00</p>
            </div>
            <div className="cart-btns">
                <button className="btn">Continue Shopping</button>
                <button className="btn">Clear Shopping Cart</button>
            </div>
        </div>
    )
}
export default Cart;