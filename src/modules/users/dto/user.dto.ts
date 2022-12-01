import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { CLEAR_XSS } from 'src/constants';

export class CreateUserDto {
  @MaxLength(255)
  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.trim().replace(CLEAR_XSS, ''))
  @IsNotEmpty({ message: 'The user name field is required!' })
  user_name: string;

  @MaxLength(255)
  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.trim().replace(CLEAR_XSS, ''))
  @IsNotEmpty({ message: 'The registed name field is required!' })
  password: string;
}

export class LoginDto extends CreateUserDto {}