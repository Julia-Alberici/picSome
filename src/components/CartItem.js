import { useContext } from "react";
import { Context } from "../AppContext";
import {PropTypes} from 'prop-types';
import useHover from "../hooks/useHover";


function CartItem({item}){
    const {removeFromCart} = useContext(Context);
    const [isHovered, hoverElementRef] = useHover();
    return(
        <div className="cart-item">
            <i 
                ref={hoverElementRef}
                onClick={() => removeFromCart(item.id)} 
                className={`ri-delete-bin-${isHovered ? 'fill' : 'line'}`}>
            </i>
            <img src={item.url} width="130px" alt=""/>
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