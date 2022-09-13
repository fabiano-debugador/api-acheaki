import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IAuthenticateRepository } from "../../repositories/IAuthenticateRepository";
import { IAuthenticateDTO } from "./AuthenticateDTO";

export class AuthenticateUseCase {
  constructor(private authenticateRepository: IAuthenticateRepository) {}

  async execute({ login, password }: IAuthenticateDTO) {
    const clientAlredyExists = await this.authenticateRepository.verify(login);

    if (!clientAlredyExists) {
      throw new Error("User or password incorrect");
    }

    const passwordMatch = await compare(password, clientAlredyExists.password);

    if (!passwordMatch) {
      throw new Error("User or password incorrect");
    }

    const token = sign({}, "13f3b6cb-3f98-4258-93c7-82878099f1d9", {
      subject: clientAlredyExists.id,
      expiresIn: "36000000s",
    });

    return { token };
  }
}
