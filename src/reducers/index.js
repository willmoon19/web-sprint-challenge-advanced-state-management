import { ON_START, ON_SUCCESS, ON_FAIL, ADD_SMURF, ON_ERROR } from "../actions";

export const initialState = {
    smurf: [],
    isLoading: true,
    errorMessage: ""
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case(ON_START):
            return({
                ...state,
                isLoading: false
            })
        case(ON_SUCCESS):
            return({
                ...state,
                smurf: action.payload
            })
        case(ON_FAIL):
            return({
                ...state,
                errorMessage: action.payload
            })
        case(ADD_SMURF):
            return({
                ...state,
                    smurf: [...state.smurf, action.payload]
            })
        case(ON_ERROR):
            return({
                ...state,
                errorMessage: "error message"
            })
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.