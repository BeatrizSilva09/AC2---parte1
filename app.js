
const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');

const tarefaController = require('./controllers/tarefaController');
app.use('/tarefas', tarefaController);


mongoose.connect('mongodb://127.0.0.1:27017/aula10')
    .then(() => {
        app.listen(27017, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor MongoDB iniciado na porta 27017');
        })
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req, res) => {
    res.send('App principal');
})



app.listen(3000, () => console.log('Servidor rodando na porta: 3000'));