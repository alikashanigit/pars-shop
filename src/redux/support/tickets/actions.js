import axios from "axios";

export const getTickets = () => async(dispatch, getState) => {
    
    try {
        
        dispatch({
            type: 'SUPPORT_TICKET_LIST_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            '/api/support/tickets/list',
            {},
            config,
        );

        dispatch({
            type: 'SUPPORT_TICKET_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'SUPPORT_TICKET_LIST_FAIL',
            payload: error,
        });

    };

};

export const addTicket = (ticket) => async(dispatch, getState) => {
    
    try {
        
        dispatch({
            type: 'SUPPORT_TICKET_ADD_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            '/api/support/tickets/add',
            ticket,
            config,
        );

        dispatch({
            type: 'SUPPORT_TICKET_ADD_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'SUPPORT_TICKET_ADD_FAIL',
            payload: error,
        });

    };

};

export const replyTicket = (id, reply) => async(dispatch, getState) => {
    
    try {
        
        dispatch({
            type: 'SUPPORT_TICKET_REPLY_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            `/api/support/tickets/ticket/${id}/`,
            reply,
            config,
        );

        dispatch({
            type: 'SUPPORT_TICKET_REPLY_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'SUPPORT_TICKET_REPLY_FAIL',
            payload: error,
        });

    };

};

export const removeTicket = (id) => async(dispatch, getState) => {
    
    try {
        
        dispatch({
            type: 'SUPPORT_TICKET_REMOVE_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/support/tickets/ticket/${id}/`,
            {},
            config,
        );

        dispatch({
            type: 'SUPPORT_TICKET_REMOVE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'SUPPORT_TICKET_REMOVE_FAIL',
            payload: error,
        });

    };

};

export const changeStatus = (id, status) => async(dispatch, getState) => {
    
    try {
        
        dispatch({
            type: 'SUPPORT_TICKET_STATUS_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.patch(
            `/api/support/tickets/status/${id}`,
            status,
            config,
        );

        dispatch({
            type: 'SUPPORT_TICKET_STATUS_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'SUPPORT_TICKET_STATUS_FAIL',
            payload: error,
        });

    };

};