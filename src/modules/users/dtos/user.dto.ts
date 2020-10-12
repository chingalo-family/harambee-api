import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmpty } from 'class-validator';

export class UserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  userRole: string;
}
