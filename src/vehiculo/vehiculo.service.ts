import { Injectable } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VehiculoEntity } from './entities/vehiculo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(VehiculoEntity)
    private vehiculoRepository: Repository<VehiculoEntity>
  ) {}
  public async create(vehi) {
    return await this.vehiculoRepository.save(vehi);
  }

  findAll(): Promise<VehiculoEntity[]> {
    return this.vehiculoRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} vehiculo`;
  // }

  public async update(id, vehi) {
    return await this.vehiculoRepository.update(id, vehi);
  }

  public async remove(id) {
    return await this.vehiculoRepository.delete(id);
  }
}
