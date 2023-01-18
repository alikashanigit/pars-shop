import axios from "axios";
export const SHIPPING_GUEST_INFO = 'SHIPPING_GUEST_INFO';
export const SHIPPING_ADDRESS_INFO = 'SHIPPING_ADDRESS_INFO';
export const SHIPPING_DATE_INFO = 'SHIPPING_DATE_INFO';


export const editName = (data) => async(dispatch, getState) => {
    dispatch({
        type: SHIPPING_GUEST_INFO,
        payload: data,
    });
    localStorage.setItem('guestInfo', JSON.stringify(getState().shipping.guestInfo))
};

export const addLocation = (data) => async(dispatch, getState) => {
    dispatch({
        type: SHIPPING_ADDRESS_INFO,
        payload: data,
    });
    localStorage.setItem('addressInfo', JSON.stringify(getState().shipping.addressInfo))
};

export const editDate = (data) => async(dispatch, getState) => {
    dispatch({
        type: SHIPPING_DATE_INFO,
        payload: data,
    });
    localStorage.setItem('dateInfo', JSON.stringify(getState().shipping.dateInfo))
};

