import axios from 'axios';

export const ON_START = "ON_START";
export const ON_SUCCESS = "ON_SUCCESS";
export const ON_FAIL = "ON_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ON_ERROR = "ON_ERROR";
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurf = () => {
    return((dispatch) => {
        dispatch({type: ON_START});
        axios.get("http://localhost:3333/smurfs")
        .then((res) => {
            console.log(res)
            dispatch({type: ON_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: ON_FAIL, payload: err})
        })
    })
}

export const addSmurf = (item) => {
    return({type: ADD_SMURF, payload: item})
}

export const setError = (error) => {
    return({type: ON_ERROR, payload: error})
}