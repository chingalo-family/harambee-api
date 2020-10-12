import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserRolesDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
