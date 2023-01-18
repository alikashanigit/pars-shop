export const userRegistrationPhoneNumberAddReducer = (state = { verificationCode: '' }, action) => {
    switch (action.type) {     
        case 'USER_REGISTRATION_PHONE_ADD_REQUEST':
            return { ...state, loading: true };
        case 'USER_REGISTRATION_PHONE_ADD_SUCCESS':
            return { ...state, loading: false, success: true, verificationCode: action.payload };
        case 'USER_REGISTRATION_PHONE_ADD_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REGISTRATION_PHONE_ADD_RESET':
            return {};
        default:
            return state;
    };
};

export const userRegistrationPhoneNumberVerifyReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_REGISTRATION_PHONE_VERIFY_REQUEST':
            return { ...state, loading: true };
        case 'USER_REGISTRATION_PHONE_VERIFY_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_REGISTRATION_PHONE_VERIFY_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REGISTRATION_PHONE_VERIFY_RESET':
            return {};
        default:
            return state;
    };
};



export const userRegistrationPasswordResetReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_REGISTRATION_PASSWORD_RESET_REQUEST':
            return { ...state, loading: true };
        case 'USER_REGISTRATION_PASSWORD_RESET_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_REGISTRATION_PASSWORD_RESET_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REGISTRATION_PASSWORD_RESET_RESET':
            return {};
        default:
            return state;
    };
};


