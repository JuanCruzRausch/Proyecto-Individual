const initialState = {
    countries: [],
    continents: [],
    subregions: [],
    country: {},
    activities: [],
    currentPage: 1,
    filters: {order: "", continent: "", activity: ""}
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
        case "GET_ALL_SUBREGIONS":
            return{
                ...state,
                subregions: action.payload
            }
        case "DELETE_DETAIL":
            return{
                ...state,
                country: {}
            }
        case "DELETE_FILTERS":
            return{
                ...state,
                countries: []
            }
        case "FILTER":
            return{
                ...state,
                countries: action.payload
            }
        case "SET_FILTERS":
            return{
                ...state,
                filters: action.payload
            }
        case "GET_COUNTRY_SEARCH":
            return{
                ...state,
                countries: action.payload
            }
        case "POST_ACTIVITY":
            return{
             ...state
            }
        case "POST_COUNTRY":
            return{
                ...state
            }
        case "SET_PAGE":
            return{
                ...state,
                currentPage: action.payload
            }
        case "RESET_PAGE":
            return{
                ...state,
                currentPage: 1
            }
        case "TOP_5":
            let asia = state.countries.filter(c => c.continent === "Asia")
            let top = asia.sort((a,b) => {
                if (a.population < b.population) {
                    return 1;
                  }
                  if (a.population > b.population) {
                    return -1;
                  }
                  return 0;
            })
            return{
                ...state,
                countries: top.slice(0,5)
            }
        default:
            return {...state}
    }
}

export default rootReducer;