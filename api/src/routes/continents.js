const express = require("express")
const { getContinents, getSubregions } = require("../controllers/data")

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

continents.get("/subregion", async (req,res) => {
    try{
        let subregions = await getSubregions()
        res.json(subregions.length > 0 ? subregions : "No continents found")
    }catch(e){
        console.log("Error: " + e);
    }
})

module.exports = continents