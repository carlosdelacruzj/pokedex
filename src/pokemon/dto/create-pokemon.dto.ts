import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt({ message: 'El valor debe ser un número entero.' })
  @IsPositive({ message: 'El número debe ser positivo.' })
  @Min(1, { message: 'El valor mínimo permitido es 1.' })
  no: number;

  @IsString({ message: 'El contenido debe ser textual.' })
  @MinLength(5, { message: 'El nombre debe contener al menos 5 caracteres.' })
  name: string;
}
