import axios from 'axios';

export const PUSH_RESULT = 'PUSH_RESULT';

export const REMOVE_RESULT = 'REMOVE_RESULT';

export const GET_EMPLOYEE = 'GET_EMPLOYEE';

export const SUB_COUNTER = 'SUB_COUNTER';


export const DEC_COUNTER = 'DEC_COUNTER';

export const ADD_COUNTER = 'ADD_COUNTER';

export const INC_COUNTER = 'INC_COUNTER';

// sync action creators
export const CounterIncrement = () => {
    return {
        type : INC_COUNTER
    }
}

export const CounterAdd = (value) => {
    return {
        type : ADD_COUNTER ,
        payload : {
            value : value
        }
    }
}

export const CounterDecrement = () => {
    return {
        type : DEC_COUNTER
    }
}


export const CounterSub = (value) => {
    return {
        type : SUB_COUNTER ,
        payload : {
            value : value
        }
    }
}

export const resultAdd = (value) => {
    return {
        type : PUSH_RESULT ,
        payload : {
            counter:value
        }
    }
};

export const resultRemoved = (value) => {
    return {
        type : REMOVE_RESULT ,
        payload : {
            value : value
        }
    }
}

export const getEmployee = (value) => {
    return {
        type : GET_EMPLOYEE ,
        payload : {
            employees : value
        }
    }
}

//async action creators

export const fetchEmployee = () => {
    return dispatch => {
        axios({
            method: 'get',
            url:'http://dtcdashboard.pythonanywhere.com/api/v1/employee/',

        })
            .then(response => {
                dispatch(getEmployee(response.data))
            })
            .catch(error => console.error('timeout exceeded'))
    }
}