import { ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_RESET, ORDER_PAY_SUCCESS } from "./actions";

export const orderPayReducer = (state = { order: {} }, action) => {
    switch (action.type) {
        
        case ORDER_PAY_REQUEST:
            return { ...state, loading: true };
       
        case ORDER_PAY_SUCCESS:
            return { ...state, loading: false, success: true, order: action.payload };
       
        case ORDER_PAY_FAIL:
            return { ...state, loading: false, success: false, error: action.payload  };
       
        case ORDER_PAY_RESET:
            return {};    
            
        default:
            return state;

    };
};