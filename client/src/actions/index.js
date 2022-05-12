import axios from 'axios'

export const getAllCountries = () => async (dispatch) => {
    let allCountries = await axios("http://localhost:3001/countries")
    return dispatch({
        type: "GET_ALL_COUNTRIES",
        payload: allCountries.data
    })
}

export const getCountry = (id) => async (dispatch) => {
    let country = await axios(`http://localhost:3001/countries/${id}`)
    return dispatch({
        type: "GET_COUNTRY",
        payload: country.data
    })
}

export const getAllContinents = () => async (dispatch) => {
    let continents = await axios("http://localhost:3001/continents")
    return dispatch({
        type: "GET_ALL_CONTINENTS",
        payload: continents.data
    })
}

export const getAllSubregions = () => async (dispatch) => {
    let subregions = await axios("http://localhost:3001/continents/subregion")
    return dispatch({
        type: "GET_ALL_SUBREGIONS",
        payload: subregions.data
    })
}

export const getAllActivities = () => async (dispatch) => {
    let activities = await axios("http://localhost:3001/activity")
    return dispatch({
        type: "GET_ALL_ACTIVITIES",
        payload: activities.data
    })
}

export const deleteDetail = () => (dispatch) => {
    return dispatch({
        type: "DELETE_DETAIL"
    })
}

export const deleteFilters = () => (dispatch) => {
    return dispatch({
        type: "DELETE_FILTERS"
    })
}

export const filter = (obj) => async (dispatch) => {
    let countriesFiltered
    if(obj.continent && obj.order && obj.activity){
        countriesFiltered = await axios(`http://localhost:3001/filters?continent=${obj.continent}&order=${obj.order}&activity=${obj.activity}`)
    }else if(obj.continent && obj.order){
        countriesFiltered = await axios(`http://localhost:3001/filters?continent=${obj.continent}&order=${obj.order}`)
    }else if(obj.continent && obj.activity){
        countriesFiltered = await axios(`http://localhost:3001/filters?continent=${obj.continent}&activity=${obj.activity}`)
    }else if(obj.activity && obj.order){
        countriesFiltered = await axios(`http://localhost:3001/filters?order=${obj.order}&activity=${obj.activity}`)
    }else if(obj.continent){
        countriesFiltered = await axios(`http://localhost:3001/filters?continent=${obj.continent}`)
    }else if(obj.activity){
        countriesFiltered = await axios(`http://localhost:3001/filters?activity=${obj.activity}`)
    }else if(obj.order){
        countriesFiltered = await axios(`http://localhost:3001/filters?order=${obj.order}`)
    }else{
        countriesFiltered = await axios("http://localhost:3001/countries")
    }
    return dispatch({
        type: "FILTER",
        payload: countriesFiltered.data
    })
}

export const setFilters = (form) => (dispatch) => {
    return dispatch({
        type: "SET_FILTERS",
        payload: form
    })
}

export const getCountriesSearch = (value) => async (dispatch) => {
    let countries = await axios(`http://localhost:3001/countries?name=${value}`)
    return dispatch({
        type: "GET_COUNTRY_SEARCH",
        payload: countries.data
    })
}

export const postActivity = (data) => async (dispatch) => {
    let post = await axios.post("http://localhost:3001/activity", data)
    return post
}

export const postCountry = (data) => async (dispatch) => {
    let post = await axios.post("http://localhost:3001/countries", data)
    return post
}

export const setCurrentPage = (num) => dispatch => {
    return dispatch({
        type: "SET_PAGE",
        payload: num
    })
}

export const resetPage = () => dispatch => {
    return dispatch({type: "RESET_PAGE"})
}

export const deleteCountry = (id) => dispatch => {
    axios.delete(`http://localhost:3001/countries/delete/${id}`)
    return alert("Country deleted")
}

export const editCountry = (editC, id) => async (dispatch) => {
    const newEdit = await axios.put(`http://localhost:3001/countries/edit/${id}`, editC)
    return newEdit
}

export const top5Asia = () => async (dispatch) => {
    return dispatch({
        type:"TOP_5"
    })
}