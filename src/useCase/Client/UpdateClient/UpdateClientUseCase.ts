import { IUpdateClientRequestDTO } from "./UpdateClientDTO";
import { IUpdateClientRepository } from "../../../repositories/IClientsRepositories";

export class UpdateClientUseCase {
  constructor(private clientRepository: IUpdateClientRepository) {}

  async execute(data: IUpdateClientRequestDTO) {
    // const clientAlredyExists = await this.clientRepository.findByLogin(
    //   data.login
    // );

    // if (clientAlredyExists) {
    //   throw new Error("Login already exists.");
    // }

    await this.clientRepository.update(data);
  }
}
