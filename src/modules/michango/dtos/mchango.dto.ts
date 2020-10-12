import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class MchangoDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  amount: number;

  @ApiProperty()
  @IsInt()
  mass?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  kanda: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  jumuhiya: string;
}
