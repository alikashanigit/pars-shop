import axios from "axios";



export const getOrders = (queryData) => async(dispatch, getState) => {
    try {
        dispatch({
            type: 'USER_ORDER_LIST_REQUEST',
        });
        
        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            `/api/user/orders/?status=${queryData}`,
            config,
        );

        dispatch({
            type: 'USER_ORDER_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_ORDER_LIST_FAIL',
            payload: error,
        });

    };

};

export const getActiveOrders = (queryData) => async(dispatch, getState) => {

    
    try {
        const { orderCode, productName, state, city, street, zipCode, totalPrice } = queryData;    
        dispatch({
            type: 'USER_ORDER_ACTIVE_LIST_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            '/api/user/orders/active/',
            {},
            config,
        );

        dispatch({
            type: 'USER_ORDER_ACTIVE_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_ORDER_ACTIVE_LIST_FAIL',
            payload: error,
        });

    };

};
export const getDeliveredOrders = (queryData) => async(dispatch, getState) => {

    
    try {
        const { orderCode, productName, state, city, street, zipCode, totalPrice } = queryData;    
        dispatch({
            type: 'USER_ORDER_DELIVERED_LIST_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            '/api/user/orders/delivered/',
            {},
            config,
        );

        dispatch({
            type: 'USER_ORDER_DELIVERED_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_ORDER_DELIVERED_LIST_FAIL',
            payload: error,
        });

    };

};
export const getCanceledOrders = (queryData) => async(dispatch, getState) => {

    
    try {
        const { orderCode, productName, state, city, street, zipCode, totalPrice } = queryData;    
        dispatch({
            type: 'USER_ORDER_CANCELED_LIST_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            '/api/user/orders/canceled/',
            {},
            config,
        );

        dispatch({
            type: 'USER_ORDER_CANCELED_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_ORDER_CANCELED_LIST_FAIL',
            payload: error,
        });

    };

};
export const getReturnedOrders = (queryData) => async(dispatch, getState) => {

    
    try {
        const { orderCode, productName, state, city, street, zipCode, totalPrice } = queryData;    
        dispatch({
            type: 'USER_ORDER_RETURNED_LIST_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            '/api/user/orders/returned/',
            {},
            config,
        );

        dispatch({
            type: 'USER_ORDER_RETURNED_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_ORDER_RETURNED_LIST_FAIL',
            payload: error,
        });

    };

};

export const getOrderDetails = (id) => async(dispatch, getState) => {
    
    try {
        
        dispatch({
            type: 'USER_ORDER_DETAILS_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            `/api/user/orders/details/${id}`,
            {},
            config,
        );

        dispatch({
            type: 'USER_ORDER_DETAILS_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_ORDER_DETAILS_FAIL',
            payload: error,
        });

    };

};

export const getOrderItemsSimilarList = (id) => async(dispatch, getState) => {
    
    try {
        
        dispatch({
            type: 'USER_ORDER_ITEMS_SIMILAR_LIST_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            `/api/user/orders/details/${id}/similar`,
            config,
        );

        dispatch({
            type: 'USER_ORDER_ITEMS_SIMILAR_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_ORDER_ITEMS_SIMILAR_LIST_FAIL',
            payload: error,
        });

    };

};

