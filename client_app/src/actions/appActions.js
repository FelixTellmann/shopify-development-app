export function fetchApp() {
    return async (dispatch) => {
        dispatch({type: "APP_FETCH_INITIATED"});
        try {
            dispatch({type: "APP_FETCH_RETURNED", payload: {api_key: process.env.REACT_APP_API_KEY}});
        } catch (err) {
            dispatch({type: "ERROR", payload: err});
        }
    };
}