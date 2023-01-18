import axios from "axios";


export const addPhoneNumber = (phoneNumber) => async(dispatch, getState) => {
    
    try {

        dispatch({
            type: 'USER_REGISTRATION_PHONE_NUMBER_ADD_REQUEST',
        });

        const { data } = await axios.post(
            '/api/user/cell-phone/add-number',
            {phoneNumber},
        );

        dispatch({
            type: 'USER_REGISTRATION_PHONE_NUMBER_ADD_SUCCESS',
            payload: data,
        });

        localStorage.setItem('phoneVerificationInfo', JSON.stringify(getState().userRegistrationPhoneNumberAdd.verificationCode))

    } catch (error) {

        dispatch({
            type: 'USER_REGISTRATION_PHONE_NUMBER_ADD_FAIL',
            payload: error,
        });

    };

};

export const verifyPhoneNumber = (phoneNumber, verificationCode) => async(dispatch) => {
    
    try {

        dispatch({
            type: 'USER_REGISTRATION_PHONE_NUMBER_VERIFY_REQUEST',
        });

        const { data } = await axios.post(
            '/api/user/cell-phone/verify-number',
            { phoneNumber, verificationCode },
        );

        dispatch({
            type: 'USER_REGISTRATION_PHONE_NUMBER_VERIFY_SUCCESS',
            payload: data,
        });
    
    } catch (error) {

        dispatch({
            type: 'USER_REGISTRATION_PHONE_NUMBER_VERIFY_FAIL',
            payload: error,
        });

    };

};

export const resetPassword = (email = '', phone = '') => async(dispatch) => {
    
    try {

        dispatch({
            type: 'USER_REGISTRATION_PASSWORD_RESET_REQUEST',
        });

        const { data } = await axios.post(
            '/api/user/password/reset',
            email,
        );

        dispatch({
            type: 'USER_REGISTRATION_PASSWORD_RESET_SUCCESS',
            payload: data,
        });
    
    } catch (error) {

        dispatch({
            type: 'USER_REGISTRATION_PASSWORD_RESET_FAIL',
            payload: error,
        });

    };

};