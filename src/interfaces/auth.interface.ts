import { UserRoleEnum } from "src/enums/user.enum";

export interface IAuthPermission {
  userType: UserRoleEnum;
  permission?: string;
}

export type IAuthReflexPermission = {
  specs: UserRoleEnum[];
};

export interface IGenerateJWT {
  id: number;
}
