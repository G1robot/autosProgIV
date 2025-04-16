import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { AuthGuard } from 'src/guard/auth.guard';
import { RolesGuard } from 'src/guard/roles.guard';
import { Roles } from 'src/decoradores/roles.decorator';

@UseGuards(AuthGuard,RolesGuard)
@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Roles('admin')
  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.clienteService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param() {id}, @Body() updateClienteDto: CreateClienteDto) {
    return this.clienteService.update(id, updateClienteDto);
  }
  @Roles('personal')
  @Delete(':id')
  remove(@Param() {id}) {
    return this.clienteService.remove(id);
  }
}
