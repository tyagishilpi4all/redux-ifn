import {
    ADD_DATA_SUCCESS,
} from "../action.type";

const initState = [];

const reducers = (state = initState, { type, values, error }) => {
    switch (type) {
        case ADD_DATA_SUCCESS:
             console.log("values in reducers---->",state.concat(values))
            return state.concat(values);
        
        default:
            return state;
    }                
};

export default reducers;
