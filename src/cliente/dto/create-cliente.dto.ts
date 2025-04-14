import { IsString, Length } from "class-validator";

export class CreateClienteDto {
    @IsString({message: 'El nombre debe ser una cadena de texto' })
    @Length(0, 40)
    nombre: string;


    @IsString({message: 'Los apellidos deben ser una cadena de texto' })
    @Length(0, 80)
    apellidos: string;


    @IsString({message: 'La cedula de identidad debe ser una cadena de texto' })
    @Length(7, 10, {message: 'La cedula de identidad debe tener entre 7 y 10 caracteres'})
    ci: string;
}
