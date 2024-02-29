import "reflect-metadata";
import { inject, injectable } from "inversify";
import { CreateUserDTO } from "../domain/dtos";
import { Usecase } from "../domain/ports";
import { UserRepository } from "../domain/repositories";
import { REPOSITORY_TYPES } from "../domain/repositories";

@injectable()
export class CreateUserUsecase implements Usecase<CreateUserDTO, boolean> {
  constructor(
    @inject(REPOSITORY_TYPES.UserRepository) private readonly userRepository: UserRepository
  ) { }

  async execute(data: CreateUserDTO): Promise<boolean> {
    const result = await this.userRepository.create(data);
    if (!result) return false;

    return true;
  }
}