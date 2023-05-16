const express = require('express');
const checklistRouter = require("./src/routes/checklist")
const app = express()

// Utilizando middlewares

// Verifica e tem algum json.
app.use(express.json())
app.use('/checklist', checklistRouter)

app.listen(3000,()=>{
    console.log('Server on')
})
