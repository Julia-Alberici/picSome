import { useState } from "react";

function Image({className, image}){
    const [hovered, setHovered] = useState(false);
    console.log(hovered)
    return(
        <div 
            className={`${className} image-container`}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={image.url} className="image-grid"/>
        </div>
    )
}

export default Image;