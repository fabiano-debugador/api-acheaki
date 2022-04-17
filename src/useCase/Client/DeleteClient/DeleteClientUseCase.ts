import { IDeleteClientRepository } from "../../../repositories/IClientsRepositories";
import { IDeleteClientDTO } from "./DeleteClientDTO";

export class DeleteClientUseCase {
  constructor (
    private clientsRepository: IDeleteClientRepository
  ) {}

  async execute(data: IDeleteClientDTO) {
    const client = await this.clientsRepository.findById(data.id);

    if (client) {
      await this.clientsRepository.delete(data.id);
      return true;
    }
  }
}
