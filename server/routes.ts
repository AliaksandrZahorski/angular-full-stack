import express from 'express';

export const routes = express.Router();

routes.get('/', (req, res) => res.send([
  {hello: 'world'},
  {hello: 'two world'},
]
));
routes.get('/users', (req, res) => res.send([]));
routes.post('/users', (req, res) => res.send({body: req.body}));
