const express = require("express")
const { getApiInfo, setDBCountries, getDBCountries, getDBActivities } = require("../controllers/data")
const { Activities } = require("../db")

const activity = express.Router()

activity.post("/", async(req, res) => {
    const { name, difficulty, duration, season} = req.body
    await Activities.create({name: name, difficulty: difficulty, duration: duration, season: season})
    res.send("Saved succesfully")
})

module.exports = activity;