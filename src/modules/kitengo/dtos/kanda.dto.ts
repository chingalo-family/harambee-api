import { IsNotEmpty, IsString } from 'class-validator';

export class KandaDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}
