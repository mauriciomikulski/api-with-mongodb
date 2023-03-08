import { SignAuthService } from "./Auth/SignAuthService";
import { ForgotPasswordService } from "./Auth/ForgotPasswordService";
import { ResetPasswordService } from "./Auth/ResetPasswordService";

import { GetAllUsersService } from "./Users/GetAllUsersService";
import { GetOneUserService } from "./Users/GetOneUserService";
import { CreateUserService } from "./Users/CreateUserService";
import { UpdateUserService } from "./Users/UpdateUserService";
import { DeleteUserService } from "./Users/DeleteUserService";



export const services = {
  GetAllUsersService,
  GetOneUserService,
  CreateUserService,
  UpdateUserService,
  DeleteUserService,
  SignAuthService,
  ForgotPasswordService,
  ResetPasswordService
};

