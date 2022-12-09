import { SetMetadata } from '@nestjs/common';
import { UserRoleEnum } from 'src/enums/user.enum';

export const ROLES_KEY = 'roles';
export const Roles = (specs: UserRoleEnum[]) => SetMetadata(ROLES_KEY, specs);