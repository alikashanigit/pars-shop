import axios from 'axios';

export const getProductsList = (queryData, pageNumber = '') => async(dispatch) => {
    const {
        sort,
        keyword,
        brands,
    } = queryData;
    try {
        dispatch({ type: 'PRODUCT_LIST_REQUEST' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const strBrands = JSON.stringify(brands)

        const queriesUrl = `
        /api/products/list?keyword=${keyword ? keyword : ''}
        &pageNumber=${pageNumber}
        &sort=${sort}
        &brands=${strBrands}

        `;
        
        const { data } = await axios.get(queriesUrl, {}, config);

        dispatch({ 
            type: 'PRODUCT_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_LIST_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const getForYouProductList = () => async(dispatch, getState) => {
    try {

        dispatch({ type: 'PRODUCT_LIST_FOR_YOU_REQUEST' });

        // const { userLogin: { userInfo } } = getState():
        const userInfo = { token: '' };
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(
            `/api/products/list/for-you`, 
            {}, 
            config
        );

        dispatch({ 
            type: 'PRODUCT_LIST_FOR_YOU_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_LIST_FOR_YOU_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};

export const getAccessoriesList = (queryData, relatedCategory) => async(dispatch) => {
    const {
        sort,
        keyword,
        brands,
        colors,
        minPrice,
        maxPrice,
        types,
    } = queryData;
    try {
        dispatch({ type: 'PRODUCT_ACCESSORIES_LIST_REQUEST' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const strBrands = JSON.stringify(brands)
        const strColors = JSON.stringify(colors)
        const strTypes = JSON.stringify(types)
       
        const queriesUrl = `
        /api/products/accessories/list?keyword=${keyword}
        &sort=${sort}
        &brands=${strBrands}
        &colors=${strColors}
        &minPrice=${minPrice}
        &maxPrice=${maxPrice}
        &types=${strTypes}
        &relatedCategory=${relatedCategory}
        `;
        
        const { data } = await axios.get(queriesUrl, {}, config);

        dispatch({ 
            type: 'PRODUCT_ACCESSORIES_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({ 
            type: 'PRODUCT_ACCESSORIES_LIST_FAIL',
            payload: error.meesage && error.meesage.data,
        });

    };
};