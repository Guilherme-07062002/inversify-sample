import 'reflect-metadata';
import { CreateUserUsecase } from "../application";
import { CreateUserDTO } from "../domain/dtos";
import { Controller } from "../domain/ports/controller";
import { Request, Response } from "../domain/ports/http";
import { badRequest, ok } from "./adapters/http";
import { USECASE_TYPES } from "../application";
import { inject, injectable } from "inversify";

namespace Request {
  export type Body = CreateUserDTO;
}

@injectable()
export class CreateUserController implements Controller {
  constructor(
    @inject(USECASE_TYPES.CreateUserUseCase) private readonly createUserUseCase: CreateUserUsecase
  ) { }

  async handle(request: Request<Request.Body>): Promise<Response> {
    const result = await this.createUserUseCase.execute(request.body);
    if (!result) return badRequest({ message: 'Failed to create user' });

    return ok({ message: 'User created' })
  }
}