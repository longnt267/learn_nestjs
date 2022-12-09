import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRoleEnum } from 'src/enums/user.enum';
import { IAuthReflexPermission } from 'src/interfaces/auth.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<IAuthReflexPermission>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    const { specs: spec } = requiredRoles;
    if (!spec) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    const { role } = user;
    return this.checkPermission(spec, role);
  }

  checkPermission(spec: UserRoleEnum[], role: UserRoleEnum) {
    if (!spec || spec.includes(UserRoleEnum.Public)) {
      return true;
    }

    return spec.includes(role);
  }
}