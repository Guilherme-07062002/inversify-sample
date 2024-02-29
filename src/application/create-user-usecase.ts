import { CreateUserDTO } from "../domain/dtos";
import { Usecase } from "../domain/ports";
import { UserRepository } from "../domain/repositories";

export class CreateUserUsecase implements Usecase<CreateUserDTO, boolean> {
  constructor(private readonly userRepository: UserRepository) { }

  async execute(data: CreateUserDTO): Promise<boolean> {
    const result = await this.userRepository.create(data);
    if (!result) return false;

    return true;
  }
}