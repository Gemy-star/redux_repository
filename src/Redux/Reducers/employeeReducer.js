import {GET_EMPLOYEE} from "../actions/actions";
import {updateObject} from "./utility";


const initialState = {
    employees : []
}



const employeeReducers = (state=initialState , action ) => {
    switch (action.type) {
        case GET_EMPLOYEE :
            return updateObject(state , {employees :action.payload.employees})
        default :
            return {
                ...state
            }
    }
}

export default employeeReducers;