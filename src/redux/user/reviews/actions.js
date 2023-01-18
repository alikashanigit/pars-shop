import axios from "axios";

export const getSubmittedReviews = () => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_REVIEWS_SUBMITTED_LIST_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            '/api/user/reviews/submitted/',
            {},
            config,
        );

        dispatch({
            type: 'USER_REVIEWS_SUBMITTED_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_REVIEWS_SUBMITTED_LIST_FAIL',
            payload: error,
        });

    };

};

export const getWaitingReviews = () => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_REVIEWS_WAITING_LIST_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            '/api/user/reviews/waiting/',
            {},
            config,
        );

        dispatch({
            type: 'USER_REVIEWS_WAITING_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_REVIEWS_WAITING_LIST_FAIL',
            payload: error,
        });

    };

};