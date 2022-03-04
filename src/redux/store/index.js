import { createStore } from "redux"
import { DECREMENT, INCREMENT, INCREMENT_BY } from "../actions/actions";

const reducerFn = ( state = { counter: 0 }, action ) => {
    switch ( action.type ) {
        case INCREMENT:
            return { counter: state.counter + 1 };
        case DECREMENT:
            return { counter: state.counter - 1 };
        case INCREMENT_BY:
            return { counter: state.counter + action.incrementValue };
        default:
            return state;
    }
}

const store = createStore( reducerFn );
export default store;