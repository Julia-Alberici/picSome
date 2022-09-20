import { useContext } from "react"
import { Context } from "../AppContext"
import CartItem from "../components/CartItem";

function Cart() {
    const {cartItems} = useContext(Context);
    const total = (5.99 * cartItems.length).toLocaleString("en-US", {style: "currency", currency: "USD"})
    return (
        <>
            <main className="cart-page">
                <h1>Check out</h1>
                {cartItems.map(item =>(
                    <CartItem key={item.id} item={item} />
                ))}
                <p className="total-cost">Total: {total}</p>
                <div className="order-button">
                    <button>Place Order</button>
                </div>
            </main>
        </>
    )
}

export default Cart