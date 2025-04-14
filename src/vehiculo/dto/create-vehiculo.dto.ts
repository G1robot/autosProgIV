import { IsNumber, IsNumberString, IsString, Length } from "class-validator";

export class CreateVehiculoDto {

    @IsString({message: 'La placa debe ser una cadena de texto' })
    @Length(7, 10, {message: 'La placa debe tener entre 7 y 10 caracteres'})    
    placa: string;

    @IsString({message: 'La marca debe ser una cadena de texto' })
    marca: string;

    @IsString({message: 'El modelo debe ser una cadena de texto' })
    @IsNumberString({}, {message: 'El modelo debe ser un numero'})
    modelo: string;

    @IsString({message: 'El color debe ser una cadena de texto' })
    color: string;


}
