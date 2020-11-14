import * as Actions from '../actions/actions';
import {updateObject} from "./utility";



// initial state

const initialState = {
    results : []
}



//reducer

const resultReducer = (state = initialState , action ) => {

    switch (action.type) {
        case Actions.PUSH_RESULT:
            return updateObject(state , { results: state.results.concat(action.payload.counter)})

        case  Actions.REMOVE_RESULT:
            const updatedArray = state.results.filter((ele , idx ) => ele !== action.payload.value)
            return updateObject(state , {results: updatedArray})
        default :
            return {
                ...state
            }

    }
}

export default resultReducer;