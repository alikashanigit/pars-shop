import { SHIPPING_ADDRESS_INFO, SHIPPING_DATE_INFO, SHIPPING_GUEST_INFO } from "./actions";


export const shippingReducer = (
    state = { 
        userInfo: {},
        guestInfo: {},
        addressInfo: {},
        dateInfo: {},
    },
    action,
) => {
    switch (action.type) {

        case SHIPPING_GUEST_INFO:
            return {
                ...state,
                guestInfo: {
                    ...state.guestInfo,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                },
            };
        
        case SHIPPING_ADDRESS_INFO:
        return {
            ...state,
            addressInfo: {
                ...state.addressInfo,
                state: action.payload.state,
                city: action.payload.city,
                street: action.payload.street,
                zipCode: action.payload.zipCode,
            },
        };
    
        case SHIPPING_DATE_INFO:
        return {
            ...state,
            dateInfo: {
                day: action.payload.state,
                time: action.payload.time,
            },
        };

        default:
            return state;

    };
};

