import { Client } from '../../../entities/Client';
import { IUpdateClientRequestDTO } from './UpdateClientDTO';
import { IUpdateClientRepository } from '../../../repositories/IClientsRepositories';

export class UpdateClientUseCase {
  constructor (
    private clientRepository: IUpdateClientRepository
  ) {}

  async execute(data: IUpdateClientRequestDTO) {
    const { id } = data;
    // const clientAlredyExists = await this.clientRepository.findByLogin(data.login);

    // if (clientAlredyExists) {
    //   throw new Error('Login already exists.');
    // }

    const client = new Client(data);

    await this.clientRepository.update(data);
  }
}
