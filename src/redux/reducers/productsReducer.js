import { ActionTypes } from '../constants/action-types'
// const initialState = {
//     products: [{
//         id: 1,
//         title: "Bhavin",
//         category: "Programer"
//     },],
// }

const initialState = {
    products: [],
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
            break;

        default:
            return state;
    }



}

export const selectProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state, ...payload
            }
        // break;

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};

        default:
            return state
    }
}