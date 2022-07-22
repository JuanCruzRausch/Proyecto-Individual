const express = require("express")
const { getApiInfo, setDBCountries, getDBCountries, getContinents, getDBActivities } = require("../controllers/data")

const trivia = express.Router()
trivia.use(express.json())

trivia.get('/', async (req,res) => {
    try{
        let countries = await getDBCountries();
        let ops = [];
        while(ops.length < 4){
            let randId = Math.floor(Math.random() * 250) +  1
            if(!ops.includes(randId)){
                ops.push(randId)
            }
        }

        res.send(ops)
    }catch(e){
        res.send(e)
    }
})

module.exports = trivia