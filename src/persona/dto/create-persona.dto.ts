import { IsEmail, IsNumberString, IsString, Length } from "class-validator";

export class CreatePersonaDto {
    @IsString ({message: 'El nombre debe ser una cadena de texto' })
    @Length(0, 40)
    nombre: string;

    @IsString ({message: 'Los apellidos deben ser una cadena de texto' })
    @Length(0, 80)
    apellidos: string;

    @IsString ({message: 'La cedula de identidad debe ser una cadena de texto' })
    @Length(7, 10, {message: 'La cedula de identidad debe tener entre 7 y 10 caracteres'})
    ci: string;

    @IsNumberString ({},{message: 'El telefono debe ser números' })
    @Length(7, 10, {message: 'El telefono debe tener entre 7 y 10 caracteres'})
    telefono: string;

    @IsEmail({}, {message: 'El correo no es valido'})
    @Length(0, 80)
    email: string;
}
