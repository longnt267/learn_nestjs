import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorators/role.decorator';
import { UserRoleEnum } from 'src/enums/user.enum';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/sign-up')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles([UserRoleEnum.Admin])
  async createUser(@Body() payload: CreateUserDto) {
    return await this.usersService.createUser(payload);
  }
}