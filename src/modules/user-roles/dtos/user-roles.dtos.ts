import { IsNotEmpty, IsString } from 'class-validator';

export class UserRolesDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}
