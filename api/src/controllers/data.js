const axios = require("axios")
const { Country, Activities } = require("../db")

const apiUrl = "https://restcountries.com/v3/all"

//Obtener todos los paises
const getApiInfo = async () => {
    const response = await axios(apiUrl)
    const apiInfo = await response.data.map( c => {
        return{
            name: c.name.common,
            flag: c.flags[1],
            continent: c.continents?.toString(),
            capital: c.capital?.toString(),
            subregion: c.subregion,
            area: c.area,
            population: c.population,
            googleMaps: c.maps.googleMaps,
            code: c.fifa
        }
    })

    return apiInfo;
}

//Añadir todos los paises de la api a la DB
const setDBCountries = async () => {
    const countries = await getApiInfo();
    countries.map( c => {
        Country.findOrCreate({
            where: { name: c.name},
            defaults: {
                name: c.name,
                flag: c.flag,
                continent: c.continent,
                capital: c.capital,
                subregion: c.subregion,
                area: c.area,
                population: c.population,
                googleMaps: c.googleMaps,
                code: c.code
            }
        });
    });
}

//Obtener los paises de la DB
const getDBCountries = async () => {
    return await Country.findAll({
        include: {
            model: Activities,
            through: {
                attributes: [],
            }
        }
    });
}

//Obtener las actividades de la DB
const getDBActivities = async () => {
    return await Activities.findAll()
}

//Obtener todos los continentes sin repetirlos
const getContinents = async () => {
    let countries = await getDBCountries()
    let continents = []
    countries.filter( c => {
        continents.push(c.continent)
    })
    let arrNonRepeted = [ ...new Set(continents)]
    return arrNonRepeted
}

//Obtener todas las subregiones sin repetirlos
const getSubregions = async () => {
    let countries = await getDBCountries()
    let subregions = []
    countries.filter( c => {
        subregions.push(c.subregion)
    })
    let arrNonRepeted = [ ...new Set(subregions)]
    let arrFixed = arrNonRepeted.filter(e => e !== null)
    let arrFixedInOrder = arrFixed.sort((a,b) => {
        if (a > b) {
            return 1;
          }
          if (a < b) {
            return -1;
          }
          return 0;
    })
    return arrFixedInOrder
}

module.exports.getApiInfo = getApiInfo
module.exports.setDBCountries = setDBCountries
module.exports.getDBCountries = getDBCountries
module.exports.getDBActivities = getDBActivities
module.exports.getContinents = getContinents
module.exports.getSubregions = getSubregions