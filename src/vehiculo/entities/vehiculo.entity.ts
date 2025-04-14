import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({name: 'vehiculo'})
export class VehiculoEntity {
    @ObjectIdColumn()
    id: ObjectId;

    @Column({length: 10})
    placa: string;

    @Column({length: 10})
    marca: string;

    @Column({length: 10})
    modelo: string;

    @Column({length: 10})
    color: string;
}
