import axios from "axios";

export const getBookmarks = (category = 'laptop') => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_BOOKMARK_LIST_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            `/api/user/bookmark/list?category=${category}`,
            {},
            config,
        );

        dispatch({
            type: 'USER_BOOKMARK_LIST_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_BOOKMARK_LIST_FAIL',
            payload: error,
        });

    };

};
export const removeProduct = (id) => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_BOOKMARK_REMOVE_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/user/bookmark/${id}`,
            {},
            config,
        );

        dispatch({
            type: 'USER_BOOKMARK_REMOVE_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_BOOKMARK_REMOVE_FAIL',
            payload: error,
        });

    };

};
export const removeAllProducts = (category) => async(dispatch, getState) => {
 
    try {
    
        dispatch({
            type: 'USER_BOOKMARK_REMOVE_ALL_REQUEST',
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.delete(
            `/api/user/bookmark/list/${category}/all`,
            {},
            config,
        );

        dispatch({
            type: 'USER_BOOKMARK_REMOVE_ALL_SUCCESS',
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: 'USER_BOOKMARK_REMOVE_ALL_FAIL',
            payload: error,
        });

    };

};