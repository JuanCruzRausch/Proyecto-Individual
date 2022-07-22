import axios from "axios";

export const getAllCountries = () => async (dispatch) => {
  let allCountries = await axios("/countries");
  return dispatch({
    type: "GET_ALL_COUNTRIES",
    payload: allCountries.data,
  });
};

export const getCountry = (id) => async (dispatch) => {
  let country = await axios(`/countries/${id}`);
  return dispatch({
    type: "GET_COUNTRY",
    payload: country.data,
  });
};

export const getAllContinents = () => async (dispatch) => {
  let continents = await axios("/continents");
  return dispatch({
    type: "GET_ALL_CONTINENTS",
    payload: continents.data,
  });
};

export const getAllSubregions = () => async (dispatch) => {
  let subregions = await axios("/continents/subregion");
  return dispatch({
    type: "GET_ALL_SUBREGIONS",
    payload: subregions.data,
  });
};

export const getAllActivities = () => async (dispatch) => {
  let activities = await axios("/activity");
  return dispatch({
    type: "GET_ALL_ACTIVITIES",
    payload: activities.data,
  });
};

export const deleteDetail = () => (dispatch) => {
  return dispatch({
    type: "DELETE_DETAIL",
  });
};

export const deleteFilters = () => (dispatch) => {
  return dispatch({
    type: "DELETE_FILTERS",
  });
};

export const filter = (obj) => async (dispatch) => {
  let countriesFiltered;
  if (obj.continent && obj.order && obj.activity) {
    countriesFiltered = await axios(
      `/filters?continent=${obj.continent}&order=${obj.order}&activity=${obj.activity}`
    );
  } else if (obj.continent && obj.order) {
    countriesFiltered = await axios(
      `/filters?continent=${obj.continent}&order=${obj.order}`
    );
  } else if (obj.continent && obj.activity) {
    countriesFiltered = await axios(
      `/filters?continent=${obj.continent}&activity=${obj.activity}`
    );
  } else if (obj.activity && obj.order) {
    countriesFiltered = await axios(
      `/filters?order=${obj.order}&activity=${obj.activity}`
    );
  } else if (obj.continent) {
    countriesFiltered = await axios(`/filters?continent=${obj.continent}`);
  } else if (obj.activity) {
    countriesFiltered = await axios(`/filters?activity=${obj.activity}`);
  } else if (obj.order) {
    countriesFiltered = await axios(`/filters?order=${obj.order}`);
  } else {
    countriesFiltered = await axios("/countries");
  }
  return dispatch({
    type: "FILTER",
    payload: countriesFiltered.data,
  });
};

export const setFilters = (form) => (dispatch) => {
  return dispatch({
    type: "SET_FILTERS",
    payload: form,
  });
};

export const getCountriesSearch = (value) => async (dispatch) => {
  let countries = await axios(`/countries?name=${value}`);
  return dispatch({
    type: "GET_COUNTRY_SEARCH",
    payload: countries.data,
  });
};

export const postActivity = (data) => async (dispatch) => {
  let post = await axios.post(" /activity", data);
  return post;
};

export const postCountry = (data) => async (dispatch) => {
  let post = await axios.post(" /countries", data);
  return post;
};

export const setCurrentPage = (num) => (dispatch) => {
  return dispatch({
    type: "SET_PAGE",
    payload: num,
  });
};

export const resetPage = () => (dispatch) => {
  return dispatch({ type: "RESET_PAGE" });
};

export const deleteCountry = (id) => (dispatch) => {
  axios.delete(` /countries/delete/${id}`);
  return alert("Country deleted");
};

export const editCountry = (editC, id) => async (dispatch) => {
  const newEdit = await axios.put(` /countries/edit/${id}`, editC);
  return newEdit;
};

export const top5Asia = () => async (dispatch) => {
  return dispatch({
    type: "TOP_5",
  });
};
