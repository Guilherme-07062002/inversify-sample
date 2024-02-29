import { CreateUserUsecase } from "../application";
import { CreateUserDTO } from "../domain/dtos";
import { Controller } from "../domain/ports/controller";
import { Request, Response } from "../domain/ports/http";
import { badRequest, ok } from "./adapters/http";

namespace Request {
  export type Body = CreateUserDTO;
}

export class CreateUserController implements Controller {
  constructor(private readonly createUserUseCase: CreateUserUsecase) { }

  async handle(request: Request<Request.Body>): Promise<Response> {
    const result = await this.createUserUseCase.execute(request.body);
    if (!result) return badRequest({ message: 'Failed to create user' });

    return ok({ message: 'User created' })
  }
}