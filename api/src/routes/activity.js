const express = require("express")
const { getApiInfo, setDBCountries, getDBCountries, getDBActivities } = require("../controllers/data")
const { Activities } = require("../db")

const activity = express.Router()

activity.get("/", async(req,res) => {
    try{
        let activities = await getDBActivities()
        res.json(activities.length > 0 ? activities : [])
    }catch(e){
        res.send("Error: " + e)
    }
})

activity.post("/", async(req, res) => {
    try{
        const { name, difficulty, duration, season} = req.body
        await Activities.create({name: name, difficulty: difficulty, duration: duration, season: season})
        res.send("Saved succesfully")
    }catch(e){
        res.send("Error: " + e)
    }
})

module.exports = activity;