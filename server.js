const express = require('express');
const server = express();

server.use(express.json());

const actionRouter = require('./routes/actionRouter/actionRouter');
const projectRouter = require('./routes/projectRouter/projectRouter');

server.get('/', () => {
    res.status(200).json({ message: 'api up...'})
})

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

