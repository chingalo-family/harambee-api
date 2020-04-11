import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class MchangoDTO {
  @IsNotEmpty()
  @IsInt()
  amount: number;

  @IsInt()
  mass?: number;

  @IsNotEmpty()
  @IsString()
  kanda: string;

  @IsNotEmpty()
  @IsString()
  jumuhiya: string;
}
