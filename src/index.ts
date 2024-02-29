import { CreateUserController } from './interface';
import { CreateUserUsecase, USECASE_TYPES } from './application';
import { AnotherFakeUserRepository, FakeUserRepository } from './infra';
import { Container } from 'inversify';
import { REPOSITORY_TYPES, UserRepository } from './domain/repositories';
import express, { Request, Response } from 'express';
import http from 'http';
const app = express();
const server = http.createServer(app);

app.use(express.json());

const container = new Container();

const configDependencies = () => {
  container.bind<CreateUserUsecase>(USECASE_TYPES.CreateUserUseCase).to(CreateUserUsecase);
  container.bind<UserRepository>(REPOSITORY_TYPES.UserRepository).to(AnotherFakeUserRepository);
}

app.post('/users', async (req: Request, res: Response) => {
  configDependencies();
  const createUserController = container.resolve<CreateUserController>(CreateUserController);
  const result = await createUserController.handle(req);

  res.status(result.status).send(result.body);
})

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!',
  });
})

server.listen(3000, () => {
  console.log('\nlistening on 3000');
});