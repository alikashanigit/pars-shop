export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case 'PRODUCT_LIST_REQUEST':
        return { loading: true, products: [] }
      case 'PRODUCT_LIST_SUCCESS':
        return {
          loading: false,
          products: action.payload.products,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case 'PRODUCT_LIST_FAIL':
        return { loading: false, error: action.payload }
      default:
        return state
    }
}

export const productListForYouReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST_FOR_YOU_REQUEST':
      return { loading: true, products: [] }
    case 'PRODUCT_LIST_FOR_YOU_SUCCESS':
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case 'PRODUCT_LIST_FOR_YOU_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productAccessoriesListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_ACCESSORIES_LIST_REQUEST':
      return { loading: true, products: [] }
    case 'PRODUCT_ACCESSORIES_LIST_SUCCESS':
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case 'PRODUCT_ACCESSORIES_LIST_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}