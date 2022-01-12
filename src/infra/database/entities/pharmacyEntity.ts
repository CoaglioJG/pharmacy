import { Column, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";

export class PharmacyEntity{
    @PrimaryColumn()
    cnpj:string;

    @Column()
    name:string;

    @Column()
    owner:string;

    @Column()
    opening:string;

    @Column()
    closed:string;

    @Column()
    address:string;

    @Column()
    telephone:string;

    @Column()
    others:string;

    @Column()
    logoUrl:string;

    

}