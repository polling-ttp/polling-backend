const router = require("express").Router();
const { poll, options, votes } = require("../models");

router.post("/", async(req,res,next) =>{
    try{
        const vote = votes.create()
    }catch(err){
        next(err)
    }
})

module.exports = Votes ;