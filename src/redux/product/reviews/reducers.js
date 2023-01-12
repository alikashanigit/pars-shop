const review = {
    colors: [],
    specs: {
        display: {
            sizes: [],
        },
        processor: {
            cpu: {},
            gpu: {},
        },
        memory: {
            cpacities: [],
        },
        network: {
            wifi: [],
        },
        os: {},
        classification: [],
    },
};

export const productReviewListReducer = (state = { reviews: [review] }, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_LIST_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_LIST_SUCCESS':
            return { ...state, loading: false, success: true, reviews: action.payload };
        case 'PRODUCT_REVIEW_LIST_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_LIST_RESET':
            return {};
        default:
            return state;
    };
};

export const productReviewDetailsReducer = (state = { review }, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_DETAILS_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_DETAILS_SUCCESS':
            return { ...state, loading: false, success: true, review: action.payload };
        case 'PRODUCT_REVIEW_DETAILS_FAIL':
            return { ...state, loading: false, success: true, error: action.payload };
        case 'PRODUCT_REVIEW_DETAILS_RESET':
            return {};
        default:
            return state;
    };
};