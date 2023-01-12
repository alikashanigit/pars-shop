const product = {
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
    featured: {
        discount: {
            price: '',
            percentage: '',
        }
    }
};

export const productDetailsReducer = (state = { product }, action) => {
    switch (action.type) {
        case 'PRODUCT_DETAILS_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_DETAILS_SUCCESS':
            return { loading: false, product: action.payload };
        case 'PRODUCT_DETAILS_FAIL':
            return { loading: false, error: action.payload };
        case 'PRODUCT_DETAILS_RESET':
            return {};
        default:
            return state;
    };
};

export const productSaveReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_SAVE_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_SAVE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_SAVE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_SAVE_RESET':
            return {};
        default:
            return state;
    };
};

export const productUnsaveReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_UNSAVE_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_UNSAVE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_UNSAVE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_UNSAVE_RESET':
            return {};
        default:
            return state;
    };
};

export const productReportReducer = (state = { report: {} }, action) => {
    switch (action.type) {
        case 'PRODUCT_REPORT_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REPORT_SUCCESS':
            return { ...state, loading: false, success: true, report: action.payload };
        case 'PRODUCT_REPORT_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REPORT_RESET':
            return {};
        default:
            return state;
    };
};