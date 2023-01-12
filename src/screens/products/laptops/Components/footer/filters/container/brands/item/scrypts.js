export const filterHandler = (name) => {
    const itemExists = brands.find(item => item === name) || false;
    itemExists
        ? setQueryData({
            ...queryData,
            brands: brands.filter(item => item !== name),
        })
        : setQueryData({
            ...queryData,
            brands: [...brands, name],
        });
};