import axios from "axios";

export const login = (email, password) => async(dispatch, getState) => {
    
    try {
        
        dispatch({
            type: 'USER_LOGIN_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            '/api/user/account/login',
            { email, password },
            config,
        );

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error,
        });

    };

};
export const getUserDetails = () => async(dispatch, getState) => {
    
    try {

        dispatch({
            type: 'USER_DETAILS_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            '/api/user/account/profile',
            {},
            config,
        );

        dispatch({
            type: 'USER_DETAILS_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_DETAILS_FAIL',
            payload: error,
        });

    };

};
export const getLastVisited = () => async(dispatch, getState) => {
    
    try {

        dispatch({
            type: 'USER_LAST_VISITED_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            '/api/user/account/last-visited',
            {},
            config,
        );

        dispatch({
            type: 'USER_LAST_VISITED_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_LAST_VISITED_FAIL',
            payload: error,
        });

    };

};

export const editName = ({ firstName, lastName }) => async(dispatch, getState) => {
    
    try {

        dispatch({
            type: 'USER_ACCOUNT_NAME_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.patch(
            '/api/user/account/name',
            { firstName, lastName },
            config,
        );

        dispatch({
            type: 'USER_ACCOUNT_NAME_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_ACCOUNT_NAME_FAIL',
            payload: error,
        });

    };

};
export const editEmail = (email) => async(dispatch, getState) => {
    
    try {

        dispatch({
            type: 'USER_ACCOUNT_EMAIL_EDIT_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            '/api/user/account/email/edit',
            email,
            config,
        );

        dispatch({
            type: 'USER_ACCOUNT_EMAIL_EDIT_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_ACCOUNT_EMAIL_EDIT_FAIL',
            payload: error,
        });

    };

};
export const verifyEmail = (token) => async(dispatch, getState) => {
    
    try {

        dispatch({
            type: 'USER_ACCOUNT_EMAIL_VERIFY_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            '/api/user/account/email/verify',
            token,
            config,
        );

        dispatch({
            type: 'USER_ACCOUNT_EMAIL_VERIFY_SUCCESS',
            payload: data,
        });

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data,
        });

        localStorage.setItem('userInfo', JSON.stringify(getState().userLogin.userInfo))

    } catch (error) {

        dispatch({
            type: 'USER_ACCOUNT_EMAIL_VERIFY_FAIL',
            payload: error,
        });

    };

};
export const editShippingAddress = (address) => async(dispatch, getState) => {
    
    try {

        dispatch({
            type: 'USER_SHIPPING_ADDRESS_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.put(
            '/api/user/account/shipping-address',
            address,
            config,
        );

        dispatch({
            type: 'USER_SHIPPING_ADDRESS_SUCCESS',
            payload: data,
        });

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data,
        });

        localStorage.setItem('userInfo', JSON.stringify(getState().userLogin.userInfo))

    } catch (error) {

        dispatch({
            type: 'USER_SHIPPING_ADDRESS_FAIL',
            payload: error,
        });

    };

};
export const editPassword = (password) => async(dispatch, getState) => {
    
    try {

        dispatch({
            type: 'USER_ACCOUNT_PASSWORD_EDIT_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.put(
            '/api/user/account/password/edit',
            password,
            config,
        );

        dispatch({
            type: 'USER_ACCOUNT_PASSWORD_EDIT_SUCCESS',
            payload: data,
        });

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data,
        });

        localStorage.setItem('userInfo', JSON.stringify(getState().userLogin.userInfo))

    } catch (error) {

        dispatch({
            type: 'USER_ACCOUNT_PASSWORD_EDIT_FAIL',
            payload: error,
        });

    };

};
export const resetPassword = (email = '', phone = '') => async(dispatch, getState) => {
    
    try {

        dispatch({
            type: 'USER_ACCOUNT_PASSWORD_RESET_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            '/api/user/account/password/reset',
            { email, phone },
            config,
        );

        dispatch({
            type: 'USER_ACCOUNT_PASSWORD_RESET_SUCCESS',
            payload: data,
        });

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data,
        });

        localStorage.setItem('userInfo', JSON.stringify(getState().userLogin.userInfo))

    } catch (error) {

        dispatch({
            type: 'USER_ACCOUNT_PASSWORD_RESET_FAIL',
            payload: error,
        });

    };

};
export const newPassword = (password) => async(dispatch, getState) => {
    
    try {

        dispatch({
            type: 'USER_ACCOUNT_PASSWORD_NEW_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            '/api/user/account/password/new',
            password,
            config,
        );

        dispatch({
            type: 'USER_ACCOUNT_PASSWORD_NEW_SUCCESS',
            payload: data,
        });

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data,
        });

        localStorage.setItem('userInfo', JSON.stringify(getState().userLogin.userInfo))

    } catch (error) {

        dispatch({
            type: 'USER_ACCOUNT_PASSWORD_NEW_FAIL',
            payload: error,
        });

    };

};

export const deleteAccount = () => async(dispatch, getState) => {
    
    try {

        dispatch({
            type: 'USER_ACCOUNT_DELETE_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            '/api/user/account',
            {},
            config,
        );

        dispatch({
            type: 'USER_ACCOUNT_DELETE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_ACCOUNT_DELETE_FAIL',
            payload: error,
        });

    };

};
export const logout = () => async() => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('bagInfo');
    localStorage.removeItem('dateInfo');
    localStorage.removeItem('addressInfo');
};

