const express = require("express")
const { getApiInfo, setDBCountries, getDBCountries, getContinents } = require("../controllers/data")

const filters = express.Router()
filters.use(express.json())

filters.get("/", async(req,res) => {
    let {order, continent, activity} = req.query
    const countries = await getDBCountries()
    const countriesWithFilters = countries.filter(c => {
        if(continent && activity){
            return c.continent.includes(continent) && c.activities.includes(activity)
        }else if(continent){
            return c.continent.includes(continent)
        }else if(activity){
            return c.activities.includes(activity)
        }else{
            return c
        }
    })
    
    if(order){
        if(order == "asc-p"){
            let ordered = countriesWithFilters.sort((a,b) => {
                if (a.population > b.population) {
                    return 1;
                  }
                  if (a.population < b.population) {
                    return -1;
                  }
                  return 0;
            })
            res.json(ordered)
        }else if(order == "desc-p"){
            let ordered = countriesWithFilters.sort((a,b) => {
                if (a.population < b.population) {
                    return 1;
                  }
                  if (a.population > b.population) {
                    return -1;
                  }
                  return 0;
            })
            res.json(ordered)
        }else if(order == "asc-a"){
            let ordered = countriesWithFilters.sort((a,b) => {
                if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  return 0;
            })
            res.json(ordered)
        }else if(order == "desc-a"){
            let ordered = countriesWithFilters.sort((a,b) => {
                if (a.name < b.name) {
                    return 1;
                  }
                  if (a.name > b.name) {
                    return -1;
                  }
                  return 0;
            })
            res.json(ordered)
        }
    }else{
        res.json(countriesWithFilters)
    }
})

module.exports = filters