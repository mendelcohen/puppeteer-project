import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class HardDrive {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    itemName: string

    @Column()
    price: number

    @Column( { nullable: true } )
    image: string

    @Column( { nullable: true } )
    isSponsored: boolean

}
