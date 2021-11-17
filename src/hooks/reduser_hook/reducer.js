import { INCREMENT, DECREMENT, ZEROING } from "./types";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + action.payload };
    case DECREMENT:
      return { counter: state.counter - action.payload };
    case ZEROING:
      return { counter: 0 };
    default:
      return { ...state };
  }
}

export default reducer;
