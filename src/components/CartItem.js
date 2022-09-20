import { useContext, useState } from "react";
import { Context } from "../AppContext";

function CartItem({item}){
    const {removeFromCart} = useContext(Context);
    const [isHovered, setIsHovered] = useState(false)
    return(
        <div className="cart-item">
            <i 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
                onClick={() => removeFromCart(item.id)} 
                className={`ri-delete-bin-${isHovered ? 'fill' : 'line'}`}>
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem;