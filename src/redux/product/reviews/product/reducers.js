export const productReviewRatingReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_RATING_REQUEST':
            return { loading: true };
        case 'PRODUCT_REVIEW_RATING_SUCCESS':
            return { loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_RATING_FAIL':
            return { loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_RATING_RESET':
            return {};
        default:
            return state;
    };
};

export const productReviewCommentAddReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_COMMENT_ADD_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_COMMENT_ADD_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_ADD_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_ADD_RESET':
            return {};
        default:
            return state;
    };
};

export const productReviewCommentRemoveReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_COMMENT_REMOVE_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_COMMENT_REMOVE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REMOVE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REMOVE_RESET':
            return {};
        default:
            return state;
    };
};

export const productReviewSuggestionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_SUGGESTION_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_SUGGESTION_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_SUGGESTION_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_SUGGESTION_RESET':
            return {};
        default:
            return state;
    };
};

export const productReviewBenefitAddReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_BENEFIT_ADD_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_BENEFIT_ADD_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_BENEFIT_ADD_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_BENEFIT_ADD_RESET':
            return {};
        default:
            return state;
    };
};
export const productReviewBenefitRemoveReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_BENEFIT_REMOVE_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_BENEFIT_REMOVE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_BENEFIT_REMOVE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_BENEFIT_REMOVE_RESET':
            return {};
        default:
            return state;
    };
};

export const productReviewDisadvantageAddReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_DISADVANTAGE_ADD_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_DISADVANTAGE_ADD_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_DISADVANTAGE_ADD_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_DISADVANTAGE_ADD_RESET':
            return {};
        default:
            return state;
    };
};
export const productReviewDisadvantageRemoveReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_DISADVANTAGE_REMOVE_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_DISADVANTAGE_REMOVE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_DISADVANTAGE_REMOVE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_DISADVANTAGE_REMOVE_RESET':
            return {};
        default:
            return state;
    };
};

