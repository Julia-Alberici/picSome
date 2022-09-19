import { useContext, useState } from "react";
import { Context } from "../AppContext";

function Image({className, image}){
    const [hovered, setHovered] = useState(false);
    const {toggleFavorite} = useContext(Context);

    return(
        <div 
            className={`${className} image-container`}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={image.url} className="image-grid"/>
            {(hovered || image.isFavorite) && 
                <>
                    <i onClick={() => toggleFavorite(image.id)} className={image.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"}></i>
                    <i className="ri-add-circle-line cart"></i>
                </>
            }
        </div>
    )
}

export default Image;