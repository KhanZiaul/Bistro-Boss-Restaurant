import { useEffect } from "react";

function useScroll(path){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[path])
}
export default useScroll;