const router = require('express').Router()
const { poll,options,votes } = require("../models")

router.get("/", async(req , res , next) =>{
    try{
        const polls = await Polls.findAll()
    }catch(err){
    next(err)
    }
})

