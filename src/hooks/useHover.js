import { useEffect, useRef, useState } from "react";

function useHover(){
    const [isHovered, setIsHovered] = useState(false);
    const hoverElementRef = useRef();

    function enter() {
        setIsHovered(true)
    }
    function leave() {
        setIsHovered(false)
    }

    useEffect(() => {
        const hoverElement = hoverElementRef.current
        hoverElement.addEventListener('mouseenter', enter);
        hoverElement.addEventListener('mouseleave', leave);
        return () => {
            hoverElement?.removeEventListener('mouseenter', enter);
            hoverElement?.removeEventListener('mouseleave', leave);
        }
    }, [])

    return [isHovered, hoverElementRef];
}

export default useHover