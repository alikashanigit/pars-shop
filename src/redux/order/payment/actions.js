import axios from "axios";

export const ORDER_PAY_REQUEST = 'ORDER_PAY_REQUEST';
export const ORDER_PAY_SUCCESS = 'ORDER_PAY_SUCCESS';
export const ORDER_PAY_FAIL = 'ORDER_PAY_FAIL';
export const ORDER_PAY_RESET = 'ORDER_PAY_RESET';



export const payOrderAsGuest = (order) => async(dispatch, getState) => {
    try {

        dispatch({
            type: ORDER_PAY_REQUEST,
        });

        const { data } = await axios.post(
            '/api/order/pay',
            order,
        )

        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data,
        });

        localStorage.removeItem('dateInfo', JSON.stringify(getState().shipping.dateInfo))
        localStorage.removeItem('addressInfo', JSON.stringify(getState().shipping.addressInfo))
        localStorage.removeItem('guestInfo', JSON.stringify(getState().shipping.guestInfo))
    
    } catch (error) {

        dispatch({
            type: ORDER_PAY_FAIL,
            payload: error,
        });

    }
};
