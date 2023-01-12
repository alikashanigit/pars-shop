import axios from 'axios';


export const like = (id, reviewId) => async(dispatch, getState) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_COMMENT_LIKE_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            `/api/product/${id}/review/${reviewId}/like`,
            {},
            config
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_LIKE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_LIKE_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const dislike = (id, reviewId) => async(dispatch, getState) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_COMMENT_DISLIKE_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/product/${id}/review/${reviewId}/dislike`,
            {},
            config,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_DISLIKE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_DISLIKE_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const reply = (id, reviewId, comment) => async(dispatch, getState) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_COMMENT_REPLY_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            `/api/product/${id}/review/${reviewId}/reply`,
            comment,
            config,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REPLY_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REPLY_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const removeReply = (id, reviewId, replyId) => async(dispatch, getState) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_COMMENT_REPLY_REMOVE_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/product/${id}/review/${reviewId}/reply/${replyId}`,
            {},
            config,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REPLY_REMOVE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REPLY_REMOVE_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const report = (id, reviewId, report) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_COMMENT_REPORT_REQUEST' });


        const { data } = await axios.post(
            `/api/product/${id}/review/${reviewId}/report`,
            report,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REPORT_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REPORT_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

