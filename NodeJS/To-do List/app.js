const express = require('express');

const checklistRouter = require('./src/routes/checklists');


const app = express()

app.use(express.json())

app.use("/checklists", checklistRouter)


app.listen(3000, (req, res)=>{
    console.log("Server is runing")
})
