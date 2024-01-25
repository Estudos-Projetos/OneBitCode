const express = require('express');

const router = express.Router()

const CheckList = require("../models/checklist")

router.get("/", async (req, res) => { 
    try {
        const checklists = await CheckList.find({})
        res.status(200).render("pages/checklists")
    } catch (error) {
        res.status(400).render("pages/error")
    }
    
})

router.post("/", (req, res) => {
    console.log(req.body) 
    res.status(200).send(req.body)
})

router.get("/:id", (req, res) => { 
   
    console.log(req.params.id)
    res.send(`Tarefa: ${req.body.task}\nID: ${req.params.id}`)
 })



module.exports = router