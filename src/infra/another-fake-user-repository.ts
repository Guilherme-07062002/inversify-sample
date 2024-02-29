import 'reflect-metadata';
import { CreateUserDTO } from "../domain/dtos";
import { UserRepository } from "../domain/repositories";
import { injectable } from 'inversify';

@injectable()
export class FakeUserRepository implements UserRepository {
  async create(data: CreateUserDTO): Promise<boolean> {
    console.log('in this fake repository, the user was not created.')
    return false;
  }
}