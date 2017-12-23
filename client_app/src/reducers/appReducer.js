const appReducer = (state = {}, action) => {
    switch (action.type) {
        case "APP_FETCH_INITIATED": {
            return {
                ...state,
                fetching: true
            };
        }
        case "APP_FETCH_RETURNED": {
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

export default appReducer;