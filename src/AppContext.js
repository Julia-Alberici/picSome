import {createContext, useEffect, useState} from 'react';

const Context = createContext();

function ContextProvider({children}){
    const [photos, setPhotos] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    useEffect(() =>{
        fetch(url)
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, [])

    console.log(photos)
    return(
        <Context.Provider value={{photos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};