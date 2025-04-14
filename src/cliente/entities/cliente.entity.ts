import { Max, Min } from "class-validator";
import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({name: 'cliente'})
export class ClienteEntity {
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

}
