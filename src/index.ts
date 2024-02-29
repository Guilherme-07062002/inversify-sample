import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

import { CreateUserController } from './interface';
import { CreateUserUsecase } from './application';
import { FakeUserRepository } from './infra';

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!',
  });
})

app.post('/users', async (req, res) => {
  const userRepository = new FakeUserRepository();
  const createUserUsecase = new CreateUserUsecase(userRepository);
  const createUserController = new CreateUserController(createUserUsecase);
  const result = await createUserController.handle(req);

  res.status(result.status).send(result.body);
})

server.listen(3000, () => {
  console.log('\nlistening on 3000');
});