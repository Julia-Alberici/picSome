import {createContext, useEffect, useState} from 'react';

const Context = createContext();

function ContextProvider({children}){
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([]);

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    useEffect(() =>{
        fetch(url)
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, [])

    function toggleFavorite(id) {
        const updatedArr = photos.map(photo => (
            (photo.id === id) ? {...photo, isFavorite: !photo.isFavorite} : photo
        ))
        setPhotos(updatedArr)
    }

    function addToCart(img) {
        setCartItems(prevItems => [...prevItems, img]);
        console.log(cartItems)
    }

    return(
        <Context.Provider value={{photos, toggleFavorite, addToCart, cartItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};