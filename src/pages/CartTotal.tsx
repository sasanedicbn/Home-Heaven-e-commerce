const CartTotal = () => {
    return(
        <div className="cart-total">
            <div>
              <p className="cart-total-subtotal">SubTotal: </p>
              <span>$120.00</span>
            </div>
            <div>
              <p className="cart-total-fee">Shipping fee: </p>
              <span>$5.15</span>
            </div>
            <div>
              <p className="orderTotal">OrderTotal: </p>
              <span>$400,00</span>
            </div>  
        </div>
    )
}
export default CartTotal;