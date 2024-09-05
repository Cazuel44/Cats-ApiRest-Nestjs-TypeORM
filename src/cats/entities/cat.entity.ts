import { Breed } from "src/breeds/entities/breed.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Cat {

    /* @PrimaryGeneratedColumn() */
    @Column({primary: true, generated: true})
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    /* @Column()
    breed: string; */ //se elimina la propiedad de raza ya que se crea una nueva tabla para relacionar los gatos a una raza

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(() => Breed, (breed)=> breed.id,{eager: true}) //Se hace la relacion a la raza (breed) ManyToOne de los gatos a la raza y se incorpora "eager" que trae el nombre de la raza y no solo el id 
    breed: Breed;

}
