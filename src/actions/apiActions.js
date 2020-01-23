import { REQUEST_API, FETCH_API_SUCCESS } from '../constants'

export const requestProducts = () =>({ type: REQUEST_API });
export const updateProducts = productsData =>({ type: FETCH_API_SUCCESS,productsData });
