import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class KandaDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
