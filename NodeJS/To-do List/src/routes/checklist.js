const express = require('express');

const router = express.Router()

router.get("/", (req, res) => { 
    console.log("checklists")
    res.send("Pag checklist")
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