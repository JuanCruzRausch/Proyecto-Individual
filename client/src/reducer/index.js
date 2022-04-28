const initialState = {
    countries: [],
    continents: [],
    country: {},
    activities: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_ALL_COUNTRIES":
            return {
                ...state,
                countries: action.payload
            }
        case "GET_COUNTRY":
            return {
                ...state,
                country: action.payload
            }
        case "GET_ALL_CONTINENTS":
            return {
                ...state,
                continents: action.payload
            }
        case "GET_ALL_ACTIVITIES":
            return {
                ...state,
                activities: action.payload
            }
        case "DELETE_DETAIL":
            return{
                ...state,
                country: {}
            }
        case "FILTER":
            return{
                ...state,
                countries: action.payload
            }
        default:
            return {...state}
    }
}

export default rootReducer;