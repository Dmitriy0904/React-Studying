import {useEffect} from "react";

function useOne(callback){
    useEffect(() => callback, []);
}

export default useOne;