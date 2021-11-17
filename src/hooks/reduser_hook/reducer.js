function reducer(state, action){
    switch(action.type){
        case "increment": return { counter: state.counter + action.payload};
        case "decrement": return { counter: state.counter - action.payload};
        case "zeroing": return { counter: 0};
        default: return state;
    }
}

export default reducer;