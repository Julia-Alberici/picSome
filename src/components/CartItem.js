import { useContext, useState } from "react";
import { Context } from "../AppContext";
import {PropTypes} from 'prop-types';

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

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem;