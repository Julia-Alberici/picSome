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
    }

    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    function emptyCart(){
        setCartItems([])
    }

    return(
        <Context.Provider value={{
            photos, 
            toggleFavorite, 
            addToCart, 
            removeFromCart, 
            emptyCart, 
            cartItems
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};