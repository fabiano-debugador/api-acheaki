// import { Client } from "../../../entities/Client";
import { IAllClients } from "../../../repositories/IClientsRepositories";
import { IListClientRequestDTO } from "./ListClientDTO";

export class ListClientUseCase {
  constructor (
    private clientsRepository: IAllClients
  ) {}

  async execute(data: IListClientRequestDTO) {
    const clientSearch = await this.clientsRepository.findByLogin(data.login);

    if (!clientSearch) {
      return null;
    }

    return clientSearch;
  }

  async executeAll() {
    const clients = this.clientsRepository.findAll();

    if (!clients) {
      throw new Error('Clients not found')
    }

    return clients
  }
}
