const shopReducer = (state = {}, action) => {
    switch (action.type) {
        case "SHOP_FETCH_INITIATED": {
            return {
                ...state,
                fetching: true
            };
        }
        case "SHOP_FETCH_RETURNED": {
            return {
                ...state,
                fetching: false,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default shopReducer;