import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonaEntity } from './entities/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(PersonaEntity)
    private personaRepository: Repository<PersonaEntity>
  ) {}
  public async create(Per) {
    return await this.personaRepository.save(Per);
  }

  findAll(): Promise<PersonaEntity[]> {
    return this.personaRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} persona`;
  // }

  public async update(id, Per) {
    return await this.personaRepository.update(id, Per);
  }

  public async remove(id) {
    return await this.personaRepository.delete(id);
  }
}
