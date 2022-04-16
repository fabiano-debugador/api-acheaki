import { Client } from "../../../entities/Client";
import { IClientsRepository } from "../../../repositories/IClientsRepositories";
import { ICreateClientRequestDTO } from "./CreateClientDTO";

export class CreateClientUseCase {
  constructor (
    private clientsRepository: IClientsRepository
  ) {}

  async execute(data: ICreateClientRequestDTO) {
    const clientAlreadyExists = await this.clientsRepository.findByLogin(data.login);

    if (clientAlreadyExists) {
      throw new Error('Client already exists.');
    }

    const client = new Client(data);

    await this.clientsRepository.save(client);
  }
}
