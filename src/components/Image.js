import { useContext, useEffect, useState } from "react";
import { Context } from "../AppContext";
import PropTypes from 'prop-types';
import useHover from "../hooks/useHover";

function Image({className, image}){
    const [isHovered, hoverElementRef] = useHover();
    const {toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context);
    const isOnCart = cartItems.some((item) => item.id === image.id)

    const [hideFavorite, setHideFavorite] = useState('hide');
    const [hideCart, setHideCart] = useState('hide');

    useEffect(() => {setHideFavorite((isHovered || image.isFavorite) ? 'show' : 'hide')}, [isHovered, image.isFavorite])
    useEffect(() => {setHideCart((isHovered || isOnCart) ? 'show' : 'hide')}, [isHovered, isOnCart])

    return(
        <div 
            className={`${className} image-container`}
            ref={hoverElementRef}
        >
            <img src={image.url} className="image-grid" alt=""/>
                <i 
                onClick={() => toggleFavorite(image.id)} 
                className={`${image.isFavorite ? "ri-heart-fill" : "ri-heart-line"} ${hideFavorite} favorite`}
                ></i>
                <i 
                onClick={() => isOnCart ? removeFromCart(image.id) : addToCart(image)} 
                className={`${isOnCart ? "ri-shopping-cart-fill" : "ri-add-circle-line"} ${hideCart} cart`}
                ></i>
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