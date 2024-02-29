import { CreateUserDTO } from "../dtos";

export interface UserRepository {
  create(data: CreateUserDTO): Promise<boolean>;
}