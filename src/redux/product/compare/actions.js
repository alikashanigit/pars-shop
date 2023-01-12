export const addToList = (id) => async(dispatch) => {
    dispatch({ 
        type: 'PRODUCT_COMPARE_ADD',
        payload: data,
    });
};

export const removeFromList = (id) => async(dispatch) => {
    dispatch({ 
        type: 'PRODUCT_COMPARE_REMOVE',
        payload: data,
    });
};

export const removeAllFromList = () => async(dispatch) => {
    dispatch({ 
        type: 'PRODUCT_COMPARE_REMOVE_ALL',
        payload: data,
    });
};

