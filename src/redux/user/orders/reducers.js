export const userOrderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {     
        case 'USER_ORDER_LIST_REQUEST':
            return { ...state, loading: true };
        case 'USER_ORDER_LIST_SUCCESS':
            return { ...state, loading: false, success: true, orders: action.payload };
        case 'USER_ORDER_LIST_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ORDER_LIST_RESET':
            return {};
        default:
            return state;
    };
};
export const userOrderActiveListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {     
        case 'USER_ORDER_ACTIVE_LIST_REQUEST':
            return { ...state, loading: true };
        case 'USER_ORDER_ACTIVE_LIST_SUCCESS':
            return { ...state, loading: false, success: true, orders: action.payload };
        case 'USER_ORDER_ACTIVE_LIST_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ORDER_ACTIVE_LIST_RESET':
            return {};
        default:
            return state;
    };
};
export const userOrderDeliveredListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {     
        case 'USER_ORDER_DELIVERED_LIST_REQUEST':
            return { ...state, loading: true };
        case 'USER_ORDER_DELIVERED_LIST_SUCCESS':
            return { ...state, loading: false, success: true, orders: action.payload };
        case 'USER_ORDER_DELIVERED_LIST_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ORDER_DELIVERED_LIST_RESET':
            return {};
        default:
            return state;
    };
};
export const userOrderCanceledListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {     
        case 'USER_ORDER_CANCELED_LIST_REQUEST':
            return { ...state, loading: true };
        case 'USER_ORDER_CANCELED_LIST_SUCCESS':
            return { ...state, loading: false, success: true, orders: action.payload };
        case 'USER_ORDER_CANCELED_LIST_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ORDER_CANCELED_LIST_RESET':
            return {};
        default:
            return state;
    };
};
export const userOrderReturnedListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {     
        case 'USER_ORDER_RETURNED_LIST_REQUEST':
            return { ...state, loading: true };
        case 'USER_ORDER_RETURNED_LIST_SUCCESS':
            return { ...state, loading: false, success: true, orders: action.payload };
        case 'USER_ORDER_RETURNED_LIST_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ORDER_RETURNED_LIST_RESET':
            return {};
        default:
            return state;
    };
};
export const userOrderDetailsReducer = (state = { order: {} }, action) => {
    switch (action.type) {     
        case 'USER_ORDER_DETAILS_REQUEST':
            return { ...state, loading: true };
        case 'USER_ORDER_DETAILS_SUCCESS':
            return { ...state, loading: false, success: true, order: action.payload };
        case 'USER_ORDER_DETAILS_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ORDER_DETAILS_RESET':
            return {};
        default:
            return state;
    };
};
export const userOrderItemsSimilarListReducer = (state = { products: [] }, action) => {
    switch (action.type) {     
        case 'USER_ORDER_ITEMS_SIMILAR_LIST_REQUEST':
            return { ...state, loading: true };
        case 'USER_ORDER_ITEMS_SIMILAR_LIST_SUCCESS':
            return { ...state, loading: false, success: true, products: action.payload };
        case 'USER_ORDER_ITEMS_SIMILAR_LIST_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ORDER_ITEMS_SIMILAR_LIST_RESET':
            return {};
        default:
            return state;
    };
};
