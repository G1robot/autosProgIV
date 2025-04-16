import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({name:'user'})
export class UserEntity{
    @ObjectIdColumn()
    id:ObjectId;

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    foto:string

    @Column({ default: 'admin' })
    rol: string;
}