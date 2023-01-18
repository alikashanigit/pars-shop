import axios from "axios";

export const ratingProduct = (rating) => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_REVIEWS_SUBMIT_RATING_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.put(
            '/api/user/reviews/submit/rating',
            rating,
            config,
        );

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_RATING_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_RATING_FAIL',
            payload: error,
        });

    };

};

export const addComment = (comment) => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_REVIEWS_SUBMIT_COMMENT_ADD_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.put(
            '/api/user/reviews/submit/comment',
            comment,
            config,
        );

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_COMMENT_ADD_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_COMMENT_ADD_FAIL',
            payload: error,
        });

    };

};
export const removeComment = (id) => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_REVIEWS_SUBMIT_COMMENT_REMOVE_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/user/reviews/submit/comment/remove/${id}`,
            {},
            config,
        );

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_COMMENT_REMOVE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_COMMENT_REMOVE_FAIL',
            payload: error,
        });

    };

};

export const addBenefit = (benefit) => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_REVIEWS_SUBMIT_BENEFIT_ADD_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            '/api/user/reviews/submit/benefit',
            benefit,
            config,
        );

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_BENEFIT_ADD_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_BENEFIT_ADD_FAIL',
            payload: error,
        });

    };

};
export const removeBenefit = (id) => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/user/reviews/submit/benefit/remove/${id}`,
            {},
            config,
        );

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_FAIL',
            payload: error,
        });

    };

};
export const removeAllBenefit = () => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_ALL_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/user/reviews/submit/benefit/remove/all`,
            {},
            config,
        );

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_ALL_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_ALL_FAIL',
            payload: error,
        });

    };

};

export const addDisadvantage = (disadvantage) => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_REVIEWS_SUBMIT_DISADVANTAGE_ADD_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            '/api/user/reviews/submit/disadvantage',
            disadvantage,
            config,
        );

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_DISADVANTAGE_ADD_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_DISADVANTAGE_ADD_FAIL',
            payload: error,
        });

    };

};
export const removeDisadvantage = (id) => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/user/reviews/submit/disadvantage/remove/${id}`,
            {},
            config,
        );

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_FAIL',
            payload: error,
        });

    };

};
export const removeAllDisadvantage = () => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_ALL_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/user/reviews/submit/disadvantage/remove/all`,
            {},
            config,
        );

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_ALL_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_ALL_FAIL',
            payload: error,
        });

    };

};