const navReducer = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_TAB": {
            return {
                ...state,
                tab_index: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default navReducer;