export const userReviewsSubmitRatingReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_REVIEWS_SUBMIT_RATING_REQUEST':
            return { ...state, loading: true };
        case 'USER_REVIEWS_SUBMIT_RATING_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_REVIEWS_SUBMIT_RATING_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REVIEWS_SUBMIT_RATING_RESET':
            return {};
        default:
            return state;
    };
};

export const userReviewsSubmitCommentAddReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_REVIEWS_SUBMIT_COMMENT_ADD_REQUEST':
            return { ...state, loading: true };
        case 'USER_REVIEWS_SUBMIT_COMMENT_ADD_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_REVIEWS_SUBMIT_COMMENT_ADD_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REVIEWS_SUBMIT_COMMENT_ADD_RESET':
            return {};
        default:
            return state;
    };
};
export const userReviewsSubmitCommentRemoveReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_REVIEWS_SUBMIT_COMMENT_REMOVE_REQUEST':
            return { ...state, loading: true };
        case 'USER_REVIEWS_SUBMIT_COMMENT_REMOVE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_REVIEWS_SUBMIT_COMMENT_REMOVE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REVIEWS_SUBMIT_COMMENT_REMOVE_RESET':
            return {};
        default:
            return state;
    };
};

export const userReviewsSubmitBenefitAddReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_REVIEWS_SUBMIT_BENEFIT_ADD_REQUEST':
            return { ...state, loading: true };
        case 'USER_REVIEWS_SUBMIT_BENEFIT_ADD_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_REVIEWS_SUBMIT_BENEFIT_ADD_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REVIEWS_SUBMIT_BENEFIT_ADD_RESET':
            return {};
        default:
            return state;
    };
};
export const userReviewsSubmitBenefitRemoveReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_REQUEST':
            return { ...state, loading: true };
        case 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_RESET':
            return {};
        default:
            return state;
    };
};
export const userReviewsSubmitBenefitRemoveAllReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_ALL_REQUEST':
            return { ...state, loading: true };
        case 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_ALL_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_ALL_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REVIEWS_SUBMIT_BENEFIT_REMOVE_ALL_RESET':
            return {};
        default:
            return state;
    };
};

export const userReviewsSubmitDisadvantageAddReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_REVIEWS_SUBMIT_DISADVANTAGE_ADD_REQUEST':
            return { ...state, loading: true };
        case 'USER_REVIEWS_SUBMIT_DISADVANTAGE_ADD_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_REVIEWS_SUBMIT_DISADVANTAGE_ADD_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REVIEWS_SUBMIT_DISADVANTAGE_ADD_RESET':
            return {};
        default:
            return state;
    };
};
export const userReviewsSubmitDisadvantageRemoveReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_REQUEST':
            return { ...state, loading: true };
        case 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_RESET':
            return {};
        default:
            return state;
    };
};
export const userReviewsSubmitDisadvantageRemoveAllReducer = (state = {}, action) => {
    switch (action.type) {     
        case 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_ALL_REQUEST':
            return { ...state, loading: true };
        case 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_ALL_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_ALL_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'USER_REVIEWS_SUBMIT_DISADVANTAGE_REMOVE_ALL_RESET':
            return {};
        default:
            return state;
    };
};
