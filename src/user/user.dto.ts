import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsEmail } from 'class-validator';

export class UserDTO {
  @ApiProperty()
  @IsEmail()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  password: string;
}
