import { IsNotEmpty, IsString, IsEmpty } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  userRole: string;
}
