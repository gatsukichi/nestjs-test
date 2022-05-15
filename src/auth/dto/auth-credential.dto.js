import { IsNotEmpty } from 'class-validator';

export class AuthCredentialsDto {
  @IsNotEmpty()
  username;

  @IsNotEmpty()
  password;
}
