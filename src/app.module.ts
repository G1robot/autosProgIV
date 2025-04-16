import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { ClienteModule } from './cliente/cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './response/response.interceptor';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://127.0.0.1:27017/autos',
      port: 27017,
      logging: true,
      autoLoadEntities: true,
      synchronize: true,
    }),
    PersonaModule, 
    VehiculoModule, 
    ClienteModule, AuthModule, UsersModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {provide: APP_INTERCEPTOR, useClass: ResponseInterceptor},
  ],
})
export class AppModule {}
