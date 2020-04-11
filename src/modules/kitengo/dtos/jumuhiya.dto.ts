import { IsNotEmpty, IsString } from 'class-validator';

export class JumuhiyaDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  kanda: string;
}
