import axios from 'axios';


export const likeReply = (id, reviewId, replyId) => async(dispatch, getState) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_COMMENT_REPLY_LIKE_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post(
            `/api/product/${id}/review/${reviewId}/reply/${replyId}/like`,
            {},
            config
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REPLY_LIKE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REPLY_LIKE_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const dislikeReply = (id, reviewId, replyId) => async(dispatch, getState) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_COMMENT_REPLY_DISLIKE_REQUEST' });

        // const { userLogin: { userInfo } } = getState();
                
        const userInfo = { token: '' };

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/product/${id}/review/${reviewId}/reply/${replyId}/dislike`,
            {},
            config
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REPLY_DISLIKE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REPLY_DISLIKE_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const reportReply = (id, reviewId, replyId, report) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_COMMENT_REPLY_REPORT_REQUEST' });


        const { data } = await axios.post(
            `/api/product/${id}/review/${reviewId}/reply/${replyId}/report`,
            report,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REPLY_REPORT_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_COMMENT_REPLY_REPORT_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

