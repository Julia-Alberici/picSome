import { useContext } from 'react';
import { Context } from "../AppContext";
import Image from "../components/Image"
import { getClass } from "../utils"

function Photos() {
    const {photos} = useContext(Context);

    const imageEl = photos.map((image, index) => (
        <Image key={image.id} image={image} className={getClass(index)}/>
    ))
    return (
        <>
            <main className="photos">
                {imageEl}
            </main>
        </>
    )
}

export default Photos