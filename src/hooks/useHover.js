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
        hoverElementRef.current.addEventListener('mouseenter', enter);
        hoverElementRef.current.addEventListener('mouseleave', leave);
        return () => {
            hoverElementRef.current?.removeEventListener('mouseenter', enter);
            hoverElementRef.current?.removeEventListener('mouseleave', leave);
        }
    }, [])

    return [isHovered, hoverElementRef];
}

export default useHover