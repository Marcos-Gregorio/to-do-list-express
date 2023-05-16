const express = require('express');
const app = express()

// Utilizando middlewares

// Verifica e tem algum json.
app.use(express.json())

// Middleware
const Log =(req,res,next) =>{
    // Next é oq permite que o middleware passe a requisição.
    console.log(req.body);
    console.log(`Data:${Date.now()}`);
    next()
}

app.use(Log)

app.get('/',(req,res)=>{
    res.send('<h1>Lista de Tarefas:</h1>')
})

app.get('/json',(req,res)=>{
   
    res.json({title:'Tarefa X',done: true})
})

app.listen(8000,() => {
    console.log('Servidor Iniciado')
}) 