import axios from 'axios';

export const getReviews = (id, queryData) => async(dispatch) => {
    const { sort, keyword } = queryData;
    try {

        dispatch({ type: 'PRODUCT_REVIEW_LIST_REQUEST' });

        const { data } = await axios.get(
            `/api/product/${id}/review/list/?sort=${sort}&keyword=${keyword}`,
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_LIST_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const getReviewDetails = (id, reviewId) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_REVIEW_DETAILS_REQUEST' });

        const { data } = await axios.get(
            `/api/product/${id}/review/${reviewId}`
        );

        dispatch({ 
            type: 'PRODUCT_REVIEW_DETAILS_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REVIEW_DETAILS_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};
