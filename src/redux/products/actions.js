import axios from 'axios';

export const getProductsList = (queryData, pageNumber = '') => async(dispatch) => {
    const {
        sort,
        keyword,
        brands,
        colors,
        minPrice,
        maxPrice,
        types,
        screenSizes,
        cacheMemories,
        interiorMemoryTypes,
        cpuModels,
        cpuFrequencies,
        cpuManufacturers,
        gpuManufacturers,
        ramModels,
        ramCapacities,
        resolutions,
        batteryTypes,
        statuses,
    } = queryData;
    try {
        dispatch({ type: 'PRODUCT_LIST_REQUEST' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const strBrands = JSON.stringify(brands)
        const strColors = JSON.stringify(colors)
        const strTypes = JSON.stringify(types)
        const strScreenSizes = JSON.stringify(screenSizes)
        const strCacheMemories = JSON.stringify(cacheMemories)
        const strInteriorMemoryTypes = JSON.stringify(interiorMemoryTypes)
        const strCpuModels = JSON.stringify(cpuModels)
        const strCpuFrequencies = JSON.stringify(cpuFrequencies)
        const strCpuManufacturers = JSON.stringify(cpuManufacturers)
        const strGpuManufacturers = JSON.stringify(gpuManufacturers)
        const strRamModels = JSON.stringify(ramModels)
        const strRamCapacities = JSON.stringify(ramCapacities)
        const strResolutions = JSON.stringify(resolutions)
        const strBatteryTypes = JSON.stringify(batteryTypes)
        const strStatuses = JSON.stringify(statuses)

        const queriesUrl = `
        /api/products/list?keyword=${keyword}
        &pageNumber=${pageNumber}
        &sort=${sort}
        &brands=${strBrands}
        &colors=${strColors}
        &minPrice=${minPrice}
        &maxPrice=${maxPrice}
        &types=${strTypes}
        &screenSizes=${strScreenSizes}
        &cacheMemories=${strCacheMemories}
        &interiorMemoryTypes=${strInteriorMemoryTypes}
        &cpuModels=${strCpuModels}
        &cpuFrequencies=${strCpuFrequencies}
        &cpuManufacturers=${strCpuManufacturers}
        &gpuManufacturers=${strGpuManufacturers}
        &ramModels=${strRamModels}
        &ramCapacities=${strRamCapacities}
        &resolutions=${strResolutions}
        &batteryTypes=${strBatteryTypes}
        &statuses=${strStatuses}
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