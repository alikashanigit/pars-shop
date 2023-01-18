export const userLoginReducer = (state = { userInfo: {} }, action) => {
    switch (action.type) {     
        case 'USER_LOGIN_REQUEST':
            return { ...state, loading: true };
        case 'USER_LOGIN_SUCCESS':
            return { ...state, loading: false, success: true, userInfo: action.payload };
        case 'USER_LOGIN_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_LOGIN_RESET':
            return {};
        default:
            return state;
    };
};

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {     
        case 'USER_DETAILS_REQUEST':
            return { ...state, loading: true };
        case 'USER_DETAILS_SUCCESS':
            return { ...state, loading: false, success: true, user: action.payload };
        case 'USER_DETAILS_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_DETAILS_RESET':
            return {};
        default:
            return state;
    };
};


export const userLastVisitedReducer = (state = { user: {} }, action) => {
    switch (action.type) {     
        case 'USER_LAST_VISITED_REQUEST':
            return { ...state, loading: true };
        case 'USER_LAST_VISITED_SUCCESS':
            return { ...state, loading: false, success: true, user: action.payload };
        case 'USER_LAST_VISITED_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_LAST_VISITED_RESET':
            return {};
        default:
            return state;
    };
};

export const userNameReducer = (state = { user: {} }, action) => {
    switch (action.type) {     
        case 'USER_NAME_REQUEST':
            return { ...state, loading: true };
        case 'USER_NAME_SUCCESS':
            return { ...state, loading: false, success: true, user: action.payload };
        case 'USER_NAME_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_NAME_RESET':
            return {};
        default:
            return state;
    };
};

export const userShippingAddressReducer = (state = { user: {} }, action) => {
    switch (action.type) {     
        case 'USER_SHIPPING_ADDRESS_REQUEST':
            return { ...state, loading: true };
        case 'USER_SHIPPING_ADDRESS_SUCCESS':
            return { ...state, loading: false, success: true, user: action.payload };
        case 'USER_SHIPPING_ADDRESS_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_SHIPPING_ADDRESS_RESET':
            return {};
        default:
            return state;
    };
};

export const userAccountEmailEditReducer = (state = { user: {} }, action) => {
    switch (action.type) {     
        case 'USER_ACCOUNT_EMAIL_EDIT_REQUEST':
            return { ...state, loading: true };
        case 'USER_ACCOUNT_EMAIL_EDIT_SUCCESS':
            return { ...state, loading: false, success: true, user: action.payload };
        case 'USER_ACCOUNT_EMAIL_EDIT_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ACCOUNT_EMAIL_EDIT_RESET':
            return {};
        default:
            return state;
    };
};

export const userAccountEmailVerifyReducer = (state = { user: {} }, action) => {
    switch (action.type) {     
        case 'USER_ACCOUNT_EMAIL_VERIFY_REQUEST':
            return { ...state, loading: true };
        case 'USER_ACCOUNT_EMAIL_VERIFY_SUCCESS':
            return { ...state, loading: false, success: true, user: action.payload };
        case 'USER_ACCOUNT_EMAIL_VERIFY_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ACCOUNT_EMAIL_VERIFY_RESET':
            return {};
        default:
            return state;
    };
};

export const userAccountPasswordEditReducer = (state = { user: {} }, action) => {
    switch (action.type) {     
        case 'USER_ACCOUNT_PASSWORD_EDIT_REQUEST':
            return { ...state, loading: true };
        case 'USER_ACCOUNT_PASSWORD_EDIT_SUCCESS':
            return { ...state, loading: false, success: true, user: action.payload };
        case 'USER_ACCOUNT_PASSWORD_EDIT_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ACCOUNT_PASSWORD_EDIT_RESET':
            return {};
        default:
            return state;
    };
};

export const userAccountPasswordResetReducer = (state = { user: {} }, action) => {
    switch (action.type) {     
        case 'USER_ACCOUNT_PASSWORD_RESET_REQUEST':
            return { ...state, loading: true };
        case 'USER_ACCOUNT_PASSWORD_RESET_SUCCESS':
            return { ...state, loading: false, success: true, user: action.payload };
        case 'USER_ACCOUNT_PASSWORD_RESET_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ACCOUNT_PASSWORD_RESET_RESET':
            return {};
        default:
            return state;
    };
};

export const userAccountPasswordNewReducer = (state = { user: {} }, action) => {
    switch (action.type) {     
        case 'USER_ACCOUNT_PASSWORD_NEW_REQUEST':
            return { ...state, loading: true };
        case 'USER_ACCOUNT_PASSWORD_NEW_SUCCESS':
            return { ...state, loading: false, success: true, user: action.payload };
        case 'USER_ACCOUNT_PASSWORD_NEW_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ACCOUNT_PASSWORD_NEW_RESET':
            return {};
        default:
            return state;
    };
};

export const userAccountDeleteReducer = (state = { user: {} }, action) => {
    switch (action.type) {     
        case 'USER_ACCOUNT_DELETE_REQUEST':
            return { ...state, loading: true };
        case 'USER_ACCOUNT_DELETE_SUCCESS':
            return { ...state, loading: false, success: true, user: action.payload };
        case 'USER_ACCOUNT_DELETE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_ACCOUNT_DELETE_RESET':
            return {};
        default:
            return state;
    };
};
