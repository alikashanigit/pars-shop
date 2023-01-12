export const productReviewCommentLikeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_COMMENT_LIKE_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_COMMENT_LIKE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_LIKE_FAIL':
            return { ...state, loading: false, success: true, error: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_LIKE_RESET':
            return {};
        default:
            return state;
    };
};

export const productReviewCommentDislikeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_COMMENT_DISLIKE_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_COMMENT_DISLIKE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_DISLIKE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_DISLIKE_RESET':
            return {};
        default:
            return state;
    };
};

export const productReviewCommentReplyReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_COMMENT_REPLY_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_RESET':
            return {};
        default:
            return state;
    };
};

export const productReviewCommentReplyRemoveReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_COMMENT_REPLY_REMOVE_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_REMOVE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_REMOVE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_REMOVE_RESET':
            return {};
        default:
            return state;
    };
};

export const productReviewCommentReportReducer = (state = { report: {} }, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_COMMENT_REPORT_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_COMMENT_REPORT_SUCCESS':
            return { ...state, loading: false, success: true, report: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REPORT_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REPORT_RESET':
            return {};
        default:
            return state;
    };
};
