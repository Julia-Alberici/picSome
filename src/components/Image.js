import { useState } from "react";

function Image({className, image}){
    const [hovered, setHovered] = useState(false);
    return(
        <div 
            className={`${className} image-container`}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={image.url} className="image-grid"/>
            {hovered && 
                <>
                    <i className="ri-heart-line favorite"></i>
                    <i className="ri-add-circle-line cart"></i>
                </>
            }
        </div>
    )
}

export default Image;