import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import { IsInt, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

/* El UpdateCatDto en NestJS extiende la clase CreateCatDto usando el decorador PartialType del paquete @nestjs/mapped-types. 
Esto es útil para crear un DTO de actualización (Data Transfer Object) que hereda las propiedades del DTO de creación, 
pero con la posibilidad de que esas propiedades sean opcionales.
¿Qué hace PartialType?
Al extender PartialType(CreateCatDto), la clase UpdateCatDto hereda todas las propiedades de CreateCatDto, 
pero las convierte en opcionales. Esto significa que cuando utilizas UpdateCatDto, 
puedes enviar uno o varios de los campos definidos en CreateCatDto para actualizar una entidad Cat, 
sin necesidad de proporcionar todos los campos. */

export class UpdateCatDto extends PartialType(CreateCatDto) {}  //Esta Linea esta funcionando como debe ser !!

// aqui se aplica de manera manual el EXTENDS PARTIALTYPE y se le asigna el decorador opcional a todos los campos del DTO de cat
/* export class UpdateCatDto {  
    @IsString()
    @MinLength(1)
    @IsOptional()
    name?: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    age?: number;

    @IsString()
    @IsOptional()
    breed?: string;
}  */