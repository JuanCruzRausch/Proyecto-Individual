const express = require("express")
const { getApiInfo, setDBCountries, getDBCountries, getContinents } = require("../controllers/data")

const continents = express.Router()
continents.use(express.json())

continents.get("/", async (req,res) => {
    try{
        let continents = await getContinents()
        res.json(continents.length > 0 ? continents : "No continents found")
    }catch(e){
        console.log("Error: " + e);
    }
})

module.exports = continents