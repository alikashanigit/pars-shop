import axios from 'axios';


export const ratingProduct = (id, rating) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_RATING_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            `/api/product/${id}/review/rating`,
            rating,
            config,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_RATING_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_RATING_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const addComment = (id, comment) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_COMMENT_ADD_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                        
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            `/api/product/${id}/review/comment`,
            comment,
            config,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_ADD_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_ADD_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const removeComment = (id, reviewId) => async(dispatch, getState) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_COMMENT_REMOVE_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
        
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/product/${id}/review/${reviewId}/comment`,
            {},
            config,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REMOVE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REMOVE_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const suggestion = (id, suggestion) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_SUGGESTION_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                        
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.put(
            `/api/product/${id}/review/suggestion`,
            suggestion,
            config,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_SUGGESTION_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_SUGGESTION_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const addBenefit = (id, benefit) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_BENEFIT_ADD_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                        
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            `/api/product/${id}/reviews/benefit`,
            benefit,
            config,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_BENEFIT_ADD_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_BENEFIT_ADD_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const removeBenefit = (id, benefitId) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_BENEFIT_REMOVE_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                        
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/product/${id}/review/benefit/${benefitId}`,
            {},
            config,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_BENEFIT_REMOVE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_BENEFIT_REMOVE_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const addDisadvantage = (id, disadvantage) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_DISADVANTAGE_ADD_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                        
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            `/api/product/${id}/review/disadvantage/`,
            disadvantage,
            config,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_DISADVANTAGE_ADD_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_DISADVANTAGE_ADD_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const removeDisadvantage = (id, disadvantageId) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_DISADVANTAGE_REMOVE_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                        
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/product/${id}/review/disadvantage/${disadvantageId}`,
            {},
            config,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_DISADVANTAGE_REMOVE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_DISADVANTAGE_REMOVE_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};