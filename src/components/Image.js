import { useContext, useState } from "react";
import { Context } from "../AppContext";
import PropTypes from 'prop-types';
import useHover from "../hooks/useHover";

function Image({className, image}){
    const [isHovered, hoverElementRef] = useHover();
    const {toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context);
    const isOnCart = cartItems.some((item) => item.id === image.id)

    return(
        <div 
            className={`${className} image-container`}
            ref={hoverElementRef}
        >
            <img src={image.url} className="image-grid"/>
            {(isHovered || image.isFavorite) && 
                <i 
                onClick={() => toggleFavorite(image.id)} 
                className={`${image.isFavorite ? "ri-heart-fill" : "ri-heart-line"} favorite`}
                ></i>
            }
            {(isHovered || isOnCart) && 
                <i 
                onClick={() => isOnCart ? removeFromCart(image.id) : addToCart(image)} 
                className={`${isOnCart ? "ri-shopping-cart-fill" : "ri-add-circle-line"} cart`}
                ></i>
            }
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image;