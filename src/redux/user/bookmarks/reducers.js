export const userBookmarkListReducer = (state = { bookmarks: [] }, action) => {
    switch (action.type) {     
        case 'USER_BOOKMARK_LIST_REQUEST':
            return { ...state, loading: true };
        case 'USER_BOOKMARK_LIST_SUCCESS':
            return { ...state, loading: false, success: true, bookmarks: action.payload };
        case 'USER_BOOKMARK_LIST_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_BOOKMARK_LIST_RESET':
            return {};
        default:
            return state;
    };
};
export const userBookmarkRemoveReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_BOOKMARK_REMOVE_REQUEST':
            return { ...state, loading: true };
        case 'USER_BOOKMARK_REMOVE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_BOOKMARK_REMOVE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_BOOKMARK_REMOVE_RESET':
            return {};
        default:
            return state;
    };
};
export const userBookmarkRemoveAllReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_BOOKMARK_REMOVE_ALL_REQUEST':
            return { ...state, loading: true };
        case 'USER_BOOKMARK_REMOVE_ALL_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_BOOKMARK_REMOVE_ALL_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_BOOKMARK_REMOVE_ALL_RESET':
            return {};
        default:
            return state;
    };
};