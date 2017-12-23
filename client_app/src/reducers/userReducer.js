const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_FETCH_INITIATED": {
            return {
                ...state,
                fetching: true
            };
        }
        case "USER_FETCH_RETURNED": {
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

export default userReducer;