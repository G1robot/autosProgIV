import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>
  ) {}
  public async create(cli) {
    return await this.clienteRepository.save(cli);
  }

  findAll(): Promise<ClienteEntity[]> {
    return this.clienteRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} cliente`;
  // }

  public async update(id, cli) {
    return await this.clienteRepository.update(id, cli);
  }

  public async remove(id) {
    return await this.clienteRepository.delete(id);
  }
}
