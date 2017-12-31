export function changeTab(tabIndex) {
    return (dispatch) => {
        dispatch({type: "CHANGE_TAB", payload: tabIndex});
    };
}