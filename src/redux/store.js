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



// Product-List


const reducer = combineReducers({
    productList: productListReducer,
    productAccessoriesList: productAccessoriesListReducer,
    productListForYou: productListForYouReducer,
    productDetails: productDetailsReducer,
   
    productSave: productSaveReducer,
    productUnSave: productUnsaveReducer,

    // Reviews:
    productReviewList: productReviewListReducer,
    productReviewDetails: productReviewDetailsReducer,
    // Product:
    productReviewRating: productReviewRatingReducer,
    productReviewBenefitAdd: productReviewBenefitAddReducer,
    productReviewBenefitRemove: productReviewBenefitRemoveReducer,
    productReviewDisadvantageAdd: productReviewDisadvantageAddReducer,
    productReviewDisadvantageRemove: productReviewDisadvantageRemoveReducer,
    productReviewCommentAdd: productReviewCommentAddReducer,
    productReviewCommentRemove: productReviewCommentRemoveReducer,
    productReviewSuggestion: productReviewSuggestionReducer,
    // Comment-Reactions:
    productReviewCommentLike: productReviewCommentLikeReducer,
    productReviewCommentDislike: productReviewCommentDislikeReducer,
    productReviewCommentReply: productReviewCommentReplyReducer,
    productReviewCommentReplyRemove: productReviewCommentReplyRemoveReducer,
    productReviewCommentReport: productReviewCommentReportReducer,
    // Reply-Reactions:   
    productReviewCommentReplyLike: productReviewCommentReplyLikeReducer,
    productReviewCommentReplyDislike: productReviewCommentReplyDislikeReducer,
    productReviewCommentReplyReport: productReviewCommentReplyReportReducer,
});

const compareList = localStorage.getItem('compareList')
    ? JSON.parse(localStorage.getItem('compareList'))
    : [];


const initialState = {
    // productCompare: {
    //     products: compareList
    // },
};

const middlewares = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;