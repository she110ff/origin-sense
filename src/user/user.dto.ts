import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsEmail } from 'class-validator';
import { User } from '../model/user.entity';

export class UserDTO {
  @ApiProperty({ required: true })
  @IsEmail()
  id: string;

  @ApiProperty({ required: false })
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  password: string;
}
