import 'reflect-metadata';
import express from 'express';
import AppDataSource from './config/database';
import { User } from './models/userModel';

const app = express();
app.use(express.json());

const PORT = 3000;

AppDataSource.initialize()
    .then(async () => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        // Defina suas rotas aqui
        app.get('/', (req, res) => {
            res.send('Servidor rodando!');
        });

        // Iniciando o servidor
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => console.log('Erro ao conectar ao banco de dados: ', error));