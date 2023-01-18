import { BAG_SHIPPING_INFO, BAG_ITEM_ADD, BAG_ITEM_DECREMENT, BAG_ITEM_INCREMENT, BAG_ITEM_REMOVE, BAG_ITEM_REMOVE_ALL } from "./actions";


export const bagReducer = (
    state = { bagItems: [], shippingInfo: {
        customer: {},
        address: {},
    } },
    action,
) => {
    switch (action.type) {
        
        case BAG_ITEM_ADD:
            const item = action.payload;
            const existItem = state.bagItems.find((x) => (
                x.product === item.product && 
                x.color === item.color &&
                x.capacity === item.capacity 
            ));
            if (existItem) {
                return {
                    bagItems: state.bagItems.map(x => (
                        x.product === existItem.product &&
                        x.color === existItem.color &&
                        x.capacity === existItem.capacity
                        ? item : x
                    )),
                };
            } else {
                return {
                    ...state,
                    bagItems: [...state.bagItems, item],
                };
            };
        
        case BAG_ITEM_INCREMENT:

            if (existItem) {
                return {
                    bagItems: state.bagItems.map(x => (
                        x.product === existItem.product &&
                        x.color === existItem.color &&
                        x.capacity === existItem.capacity
                        
                        ? item : x
                    )),
                };
            } else {
                return {
                    ...state,
                    bagItems: [...state.bagItems, item],
                };
            };
        
        case BAG_ITEM_REMOVE:
            const itemExists = state.bagItems.find((x) => (
                x.product === action.payload.product && 
                x.color === action.payload.color &&
                x.capacity === action.payload.capacity 
            ));
            if (itemExists) {
                return {
                    ...state,
                    bagItems: state.bagItems.filter((x) => 
                        x.product !== itemExists.product &&
                        x.color !== itemExists.color &&
                        x.capacity !== itemExists.capacity
                    ),
                };
            };
            
        case BAG_SHIPPING_INFO:
           
            return {
                ...state,
                shippingInfo: action.payload,
            };
            
        default:
            return state;

    };
};

export const guestInfoCellPhoneAddReducer = (state = { verifyCode: '' }, action) => {
    switch (action.type) {     
        case 'USER_REGISTRATION_CELL_PHONE_ADD_REQUEST':
            return { ...state, loading: true };
        case 'USER_REGISTRATION_CELL_PHONE_ADD_SUCCESS':
            return { ...state, loading: false, success: true, verifyCode: action.payload };
        case 'USER_REGISTRATION_CELL_PHONE_ADD_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REGISTRATION_CELL_PHONE_ADD_RESET':
            return {};
        default:
            return state;
    };
};

export const guestInfoCellPhoneVerifyReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_REGISTRATION_CELL_PHONE_VERIFY_REQUEST':
            return { ...state, loading: true };
        case 'USER_REGISTRATION_CELL_PHONE_VERIFY_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_REGISTRATION_CELL_PHONE_VERIFY_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REGISTRATION_CELL_PHONE_VERIFY_RESET':
            return {};
        default:
            return state;
    };
};


