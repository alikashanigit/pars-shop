import axios from "axios";
export const BAG_ITEM_ADD = 'BAG_ITEM_ADD';
export const BAG_ITEM_REMOVE = 'BAG_ITEM_REMOVE';
export const BAG_ITEM_REMOVE_ALL = 'BAG_ITEM_REMOVE_ALL';
export const BAG_ITEM_INCREMENT = 'BAG_ITEM_INCREMENT';
export const BAG_ITEM_DECREMENT = 'BAG_ITEM_DECREMENT';
export const BAG_SHIPPING_INFO = 'BAG_SHIPPING_INFO';


export const addToBag = (item) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/product/${item.product}`)
    dispatch({
        type: BAG_ITEM_ADD,
        payload: {
            product: data._id,
            name: data.name,
            cover: data.cover,
            price: item.price,
            countInStock: data.countInStock,
            qty: item.qty,
            color: item.color,
            capacity: item.capacity,
        },
    })
  
    localStorage.setItem('bagItems', JSON.stringify(getState().bag.bagItems))
};
export const increment = (item, qty) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/product/${item.product}`)
    dispatch({
        type: BAG_ITEM_INCREMENT,
        payload: {
            product: data._id,
            color: item.color,
            capacity: item.capacity,
            countInStock: data.countInStock,
            qty,
        },
    })
  
    localStorage.setItem('bagItems', JSON.stringify(getState().bag.bagItems))
};
export const removeFromBag = (item) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/product/${item.product}`)
    dispatch({
        type: BAG_ITEM_REMOVE,
        payload: {
            product: data._id,
            color: item.color,
            capacity: item.capacity,
        },
    })
    localStorage.setItem('bagItems', JSON.stringify(getState().bag.bagItems))
};

export const addPhoneNumber = (cellPhoneNumber) => async(dispatch) => {
    
    try {

        dispatch({
            type: 'USER_REGISTRATION_CELL_PHONE_ADD_REQUEST',
        });

        const { data } = await axios.post(
            '/api/user/cell-phone/add-number',
            cellPhoneNumber,
        );

        dispatch({
            type: 'USER_REGISTRATION_CELL_PHONE_ADD_SUCCESS',
            payload: data,
        });
    
    } catch (error) {

        dispatch({
            type: 'USER_REGISTRATION_CELL_PHONE_ADD_FAIL',
            payload: error,
        });

    };

};

export const verifyPhoneNumber = (verifyCode) => async(dispatch) => {
    
    try {

        dispatch({
            type: 'USER_REGISTRATION_CELL_PHONE_VERIFY_REQUEST',
        });

        const { data } = await axios.post(
            '/api/user/cell-phone/verify-number',
            verifyCode,
        );

        dispatch({
            type: 'USER_REGISTRATION_CELL_PHONE_VERIFY_SUCCESS',
            payload: data,
        });
    
    } catch (error) {

        dispatch({
            type: 'USER_REGISTRATION_CELL_PHONE_VERIFY_FAIL',
            payload: error,
        });

    };

};


export const editShippingInfo = (data) => async(dispatch, getState) => {
    dispatch({
        type: BAG_SHIPPING_INFO,
        payload: data,
    });
    localStorage.setItem('shippingInfo', JSON.stringify(getState().bag.shippingInfo));
};

