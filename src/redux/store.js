import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { productAccessoriesListReducer, productListForYouReducer, productListReducer } from './products/reducers';
import { productCompareReducer, productDetailsReducer, productSaveReducer, productUnsaveReducer } from './product/reducers';
import { productReviewListReducer, productReviewDetailsReducer } from './product/reviews/reducers';
import { 
    productReviewBenefitAddReducer,
    productReviewBenefitRemoveReducer,
    productReviewCommentAddReducer, 
    productReviewCommentRemoveReducer, 
    productReviewDisadvantageAddReducer, 
    productReviewDisadvantageRemoveReducer, 
    productReviewRatingReducer, 
    productReviewSuggestionReducer,
} from './product/reviews/product/reducers';
import { productReviewCommentDislikeReducer, productReviewCommentLikeReducer, productReviewCommentReplyReducer, productReviewCommentReplyRemoveReducer, productReviewCommentReportReducer } from './product/reviews/reactions/comment/reducers';
import { productReviewCommentReplyDislikeReducer, productReviewCommentReplyLikeReducer, productReviewCommentReplyReportReducer } from './product/reviews/reactions/reply/reducers';
import { bagReducer } from './bag/reducers';
import { shippingReducer } from './order/shipping/reducers';
import { orderPayReducer } from './order/payment/reducers';
import { userRegistrationPasswordResetReducer, userRegistrationPhoneNumberAddReducer, userRegistrationPhoneNumberVerifyReducer } from './user/registration/reducers';
import { userAccountDeleteReducer, userAccountEmailEditReducer, userAccountEmailVerifyReducer, userAccountNameReducer, userAccountPasswordEditReducer, userAccountPasswordNewReducer, userAccountPasswordResetReducer, userDetailsReducer, userLastVisitedReducer, userLoginReducer, userShippingAddressReducer } from './user/account/reducers';
import { userOrderActiveListReducer, userOrderCanceledListReducer, userOrderDeliveredListReducer, userOrderDetailsReducer, userOrderItemsSimilarListReducer, userOrderListReducer, userOrderReturnedListReducer } from './user/orders/reducers';
import { userReviewsSubmitBenefitAddReducer, userReviewsSubmitBenefitRemoveAllReducer, userReviewsSubmitBenefitRemoveReducer, userReviewsSubmitCommentAddReducer, userReviewsSubmitCommentRemoveReducer, userReviewsSubmitDisadvantageAddReducer, userReviewsSubmitDisadvantageRemoveAllReducer, userReviewsSubmitDisadvantageRemoveReducer, userReviewsSubmitRatingReducer } from './user/reviews/submit/reducers';
import { userBookmarkListReducer, userBookmarkRemoveAllReducer, userBookmarkRemoveReducer } from './user/bookmarks/reducers';


const reducer = combineReducers({
    // Order:
    orderPay: orderPayReducer,
    // Bag:
    bag: bagReducer,
    // Shipping:
    shipping: shippingReducer,

    // User >> 'Registration':
    userRegistrationPhoneNumberAdd: userRegistrationPhoneNumberAddReducer,
    userRegistrationPhoneNumberVerify: userRegistrationPhoneNumberVerifyReducer,
    userRegistrationPasswordReset: userRegistrationPasswordResetReducer,
    // User >> 'PROTECT':
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userLastVisited: userLastVisitedReducer,
    userAccountName: userAccountNameReducer,
    userShippingAddress: userShippingAddressReducer,
    userAccountEmailEdit: userAccountEmailEditReducer,
    userAccountEmailVerify: userAccountEmailVerifyReducer,
    userAccountPasswordEdit: userAccountPasswordEditReducer,
    userAccountPasswordReset: userAccountPasswordResetReducer,
    userAccountPasswordNew: userAccountPasswordNewReducer,
    userAccountDelete: userAccountDeleteReducer,
    userOrderList: userOrderListReducer,
    userOrderActiveList: userOrderActiveListReducer,
    userOrderDeliveredList: userOrderDeliveredListReducer,
    userOrderCanceledList: userOrderCanceledListReducer,
    userOrderReturnedList: userOrderReturnedListReducer,
    userOrderDetails: userOrderDetailsReducer,
    userOrderItemsSimilarList: userOrderItemsSimilarListReducer,
    
    // User >> 'BOOKMARKS':
    userBookmarkList: userBookmarkListReducer,
    userBookmarkRemove: userBookmarkRemoveReducer,
    userBookmarkRemoveAll: userBookmarkRemoveAllReducer,
    // User >> 'Reviews':
    userReviewsSubmitRating: userReviewsSubmitRatingReducer,
    userReviewsSubmitCommentAdd: userReviewsSubmitCommentAddReducer,
    userReviewsSubmitCommentRemove: userReviewsSubmitCommentRemoveReducer,
    userReviewsSubmitBenefitAdd: userReviewsSubmitBenefitAddReducer,
    userReviewsSubmitBenefitRemove: userReviewsSubmitBenefitRemoveReducer,
    userReviewsSubmitBenefitRemoveAll: userReviewsSubmitBenefitRemoveAllReducer,
    userReviewsSubmitDisadvantageAdd: userReviewsSubmitDisadvantageAddReducer,
    userReviewsSubmitDisadvantageRemove: userReviewsSubmitDisadvantageRemoveReducer,
    userReviewsSubmitDisadvantageRemoveAll: userReviewsSubmitDisadvantageRemoveAllReducer,


    // Products:
    productList: productListReducer,
    productAccessoriesList: productAccessoriesListReducer,
    productListForYou: productListForYouReducer,
    // Product-Details:
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    productUnSave: productUnsaveReducer,
    // Reviews:
    productReviewList: productReviewListReducer,
    productReviewDetails: productReviewDetailsReducer,
    // Reviews >> Add:
    productReviewRating: productReviewRatingReducer,
    productReviewBenefitAdd: productReviewBenefitAddReducer,
    productReviewBenefitRemove: productReviewBenefitRemoveReducer,
    productReviewDisadvantageAdd: productReviewDisadvantageAddReducer,
    productReviewDisadvantageRemove: productReviewDisadvantageRemoveReducer,
    productReviewCommentAdd: productReviewCommentAddReducer,
    productReviewCommentRemove: productReviewCommentRemoveReducer,
    productReviewSuggestion: productReviewSuggestionReducer,
    // Reviews >> Comment-Reactions:
    productReviewCommentLike: productReviewCommentLikeReducer,
    productReviewCommentDislike: productReviewCommentDislikeReducer,
    productReviewCommentReply: productReviewCommentReplyReducer,
    productReviewCommentReplyRemove: productReviewCommentReplyRemoveReducer,
    productReviewCommentReport: productReviewCommentReportReducer,
    // Reviews >> Reply-Reactions:   
    productReviewCommentReplyLike: productReviewCommentReplyLikeReducer,
    productReviewCommentReplyDislike: productReviewCommentReplyDislikeReducer,
    productReviewCommentReplyReport: productReviewCommentReplyReportReducer,
});


const guestInfoFromStorage = localStorage.getItem('guestInfo')
    ? JSON.parse(localStorage.getItem('guestInfo'))
    : {};
const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : {};
const dateInfoFromStorage = localStorage.getItem('dateInfo')
    ? JSON.parse(localStorage.getItem('dateInfo'))
    : {};
const addressInfoFromStorage = localStorage.getItem('addressInfo')
    ? JSON.parse(localStorage.getItem('addressInfo'))
    : {};
const paymentInfoFromStorage = localStorage.getItem('paymentInfo')
    ? JSON.parse(localStorage.getItem('paymentInfo'))
    : {};

const bagItemsFromStorage = localStorage.getItem('bagItems')
    ? JSON.parse(localStorage.getItem('bagItems'))
    : [];

const phoneVerificationInfoFromStorage = localStorage.getItem('phoneVerificationInfo')
    ? JSON.parse(localStorage.getItem('phoneVerificationInfo'))
    : {};

const searchHistoryInfoFromStorage = localStorage.getItem('searchHistoryInfo')
    ? JSON.parse(localStorage.getItem('searchHistoryInfo'))
    : [];

const initialState = {
    userLogin: {
        userInfo: {
            firstName: 'ali'
        },
        phoneVerificationInfo: phoneVerificationInfoFromStorage,
        searchHistoryInfo: searchHistoryInfoFromStorage,
    },
    bag: {
        bagItems: bagItemsFromStorage,
    },
    shipping: {
        guestInfo: guestInfoFromStorage,
        userInfo: userInfoFromStorage,
        addressInfo: addressInfoFromStorage,
        dateInfo: dateInfoFromStorage,
        paymentInfo: paymentInfoFromStorage,
    },

};

const middlewares = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;