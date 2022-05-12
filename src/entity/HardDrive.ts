import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class HardDrive {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    itemName: string

    @Column()
    price: number

}
