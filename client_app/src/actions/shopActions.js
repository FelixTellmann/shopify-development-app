export function fetchShop() {
    return async (dispatch) => {
        dispatch({type: "SHOP_FETCH_INITIATED"});
        try {
            dispatch({type: "SHOP_FETCH_RETURNED", payload: (await(await fetch('/api/shop', {credentials: "same-origin"})).json()).shop});
        } catch (err) {
            dispatch({type: "ERROR", payload: err});
        }
    };
}