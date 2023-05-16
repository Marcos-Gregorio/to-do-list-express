const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Lista de Tarefas:</h1>')
})

app.get('/json',(req,res)=>{
    res.json({title:'Tarefa X',done: true})
})

app.listen(8000,() => {
    console.log('Servidor Iniciado')
}) 