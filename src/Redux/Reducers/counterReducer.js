import * as Actions from '../actions/actions';
import {updateObject} from "./utility";



// initial state

const initialState = {
    counter:0,
}



//reducer

const counterReducer = (state = initialState , action ) => {

    switch (action.type) {
        case Actions.INC_COUNTER :
            return updateObject(state ,{ counter: state.counter+1})
        case Actions.ADD_COUNTER:
            return updateObject(state , {counter: state.counter + action.payload.value})

        case Actions.DEC_COUNTER :
            return updateObject(state , {counter: state.counter-1})

        case  Actions.SUB_COUNTER:
            return updateObject(state , { counter: state.counter + action.payload.value})
        default :
            return {
                ...state
            }

    }
}

export default counterReducer;