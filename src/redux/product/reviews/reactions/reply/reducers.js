export const productReviewCommentReplyLikeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_COMMENT_REPLY_LIKE_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_LIKE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_LIKE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_LIKE_RESET':
            return {};
        default:
            return state;
    };
};

export const productReviewCommentReplyDislikeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_COMMENT_REPLY_DISLIKE_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_DISLIKE_SUCCESS':
            return { ...state, loading: false, success: true, message: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_DISLIKE_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_DISLIKE_RESET':
            return {};
        default:
            return state;
    };
};

export const productReviewCommentReplyReportReducer = (state = { report: {} }, action) => {
    switch (action.type) {
        case 'PRODUCT_REVIEW_COMMENT_REPLY_REPORT_REQUEST':
            return { ...state, loading: true };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_REPORT_SUCCESS':
            return { ...state, loading: false, success: true, report: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_REPORT_FAIL':
            return { ...state, loading: false, success: false, error: action.payload };
        case 'PRODUCT_REVIEW_COMMENT_REPLY_REPORT_RESET':
            return {};
        default:
            return state;
    };
};
