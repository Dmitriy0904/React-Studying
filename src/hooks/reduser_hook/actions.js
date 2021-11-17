import { INCREMENT, DECREMENT, ZEROING } from "./types";

export const increment = (payload) => {
    return {
        type: INCREMENT, 
        payload: payload
    };
}

export const decrement = (payload) => {
    return {
        type: DECREMENT, 
        payload: payload
    };
}

export const zeroing = () => {
    return {
        type: ZEROING, 
        payload: 0
    };
}