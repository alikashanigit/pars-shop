export const productCompareReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        
        case 'PRODUCT_COMPARE_ADD':
            const item = action.payload;
            const existItem = state.products.find((x) => x === item)
            if (existItem) {
                return {
                    ...state,
                    products: state.products.map((x) =>
                        x.product === existItem ? item : x
                ),
                }
            } else {
                return {
                    ...state,
                    products: [...state.products, item],
                }
            };
 
        case 'PRODUCT_COMPARE_REMOVE':
            return {
                ...state,
                products: state.products.filter((x) => x !== action.payload),
            };

        case 'PRODUCT_COMPARE_REMOVE_All':
            return {
                ...state,
                products: [],
            };
    
        case 'PRODUCT_COMPARE_RESET':
            return {};

        default:
            return state;
    };
};