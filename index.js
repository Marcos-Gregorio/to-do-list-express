const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Lista de Tarefas:</h1>')
})

app.listen(8000,() => {
    console.log('Servidor Iniciado')
}) 