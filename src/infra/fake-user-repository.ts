import { CreateUserDTO } from "../domain/dtos";
import { UserRepository } from "../domain/repositories";

export class FakeUserRepository implements UserRepository {
  async create(data: CreateUserDTO): Promise<boolean> {
    console.log('new user created:', data);
    return true;
  }
}