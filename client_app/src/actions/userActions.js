export function fetchUser() {
    return async (dispatch) => {
        dispatch({type: "USER_FETCH_INITIATED"});
        try {
            dispatch({type: "USER_FETCH_RETURNED", payload: await(await fetch('/api/user', {credentials: "same-origin"})).json()});
        } catch (err) {
            dispatch({type: "ERROR", payload: err});
        }
    };
}