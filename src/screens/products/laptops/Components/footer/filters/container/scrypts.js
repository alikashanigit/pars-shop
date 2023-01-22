export const filterHandler = (part, name, setQueryData, queryData) => {
    const itemExists = queryData.brands && queryData.brands.find(item => item === name) || false;
    itemExists 
        ? setQueryData({ 
            ...queryData,
            [part]: queryData[part].filter(item => item !== name),
        })
        : setQueryData({ 
            ...queryData,
            [part]: [...queryData[part], name],
        });
};