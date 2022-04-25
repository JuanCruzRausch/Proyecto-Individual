const express = require("express")
const { getApiInfo, setDBCountries, getDBCountries } = require("../controllers/data")

const countries = express.Router()
countries.use(express.json())

countries.get("/", async(req,res) => {
    let name = req.query.name
    await setDBCountries()
    let allCountries = await getDBCountries()
    
    if(name){
        try{
            let country = allCountries.filter( c => c.name.toLowerCase().includes(name.toLowerCase()))
            res.json(country.length > 0 ? country : `There is no country which name includes ${name}`)
        }catch(e){
            res.send("Error: " + e)
        }
    }else{
        try{
            res.json(allCountries.length > 0 ? allCountries : "There are no countries saved on the data base")
        }catch(e){
            res.send("Error: " + e)
        }
    }
})

countries.get("/:id", async(req,res) => {
    try{
        const id = req.params.id
        await setDBCountries()
        let info = await getDBCountries()
        let country = info.filter(c => id == c.id)
        res.json(country.length > 0 ? country : `There is no country saved on the data base whit the id of ${id}`)
    }catch(e){
        res.send("Error: " + e)
    }
})

module.exports = countries;