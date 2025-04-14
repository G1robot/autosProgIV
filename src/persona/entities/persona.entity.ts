import { IsEmail, IsNumberString, Max, Min } from "class-validator";
import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({name: 'persona'})
export class PersonaEntity {
    @ObjectIdColumn()
    id: ObjectId;

    @Column({length: 80})
    nombre: string;

    @Column({length: 80})
    apellidos: string;

    @Column()
    @Min(7)
    @Max(10)
    ci: string;

    @Column()
    @Min(7)
    @Max(10)
    @IsNumberString({}, {message: 'El telefono debe ser un numero'})
    telefono: string;

    @Column()
    @IsEmail({}, {message: 'El correo no es valido'})
    email: string;
}
