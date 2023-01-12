import axios from 'axios';

export const getProductDetails = (id) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_DETAILS_REQUEST' });

        const { data } = await axios.get(
            `/api/product/${id}`
        );

        dispatch({ 
            type: 'PRODUCT_DETAILS_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_DETAILS_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const saveProduct = (id) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_SAVE_REQUEST' });

        const { data } = await axios.post(
            `/api/product/${id}/save`
        );

        dispatch({ 
            type: 'PRODUCT_SAVE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_SAVE_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const unsaveProduct = (id) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_UNSAVE_REQUEST' });

        const { data } = await axios.delete(
            `/api/product/${id}/save`
        );

        dispatch({ 
            type: 'PRODUCT_UNSAVE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_UNSAVE_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const reportProduct = (id) => async(dispatch) => {
    try {

        dispatch({ type: 'PRODUCT_REPORT_REQUEST' });

        const { data } = await axios.put(
            `/api/product/${id}/report`
        );

        dispatch({ 
            type: 'PRODUCT_REPORT_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_REPORT_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};