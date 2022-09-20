import { useContext, useState } from "react"
import { Context } from "../AppContext"
import CartItem from "../components/CartItem";

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order");
    const {cartItems, emptyCart} = useContext(Context);
    const total = (5.99 * cartItems.length).toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder() {
        setButtonText("Ordering...");
        setTimeout(() =>{
            setButtonText("Place Order");
            emptyCart();
        }, 3000)
    }
    return (
        <>
            <main className="cart-page">
                <h1>Check out</h1>
                {cartItems.map(item =>(
                    <CartItem key={item.id} item={item} />
                ))}
                <p className="total-cost">Total: {total}</p>
                {cartItems.length > 0 ?
                    <div className="order-button">
                        <button onClick={placeOrder}>{buttonText}</button>
                    </div> :
                    <p>You have no items in your cart.</p>
                }
            </main>
        </>
    )
}

export default Cart