
export type UsersId = { id: string };

export type CreateUserRequest = {
  user_name: string;
  user_email: string;
  user_login: string;
  user_password: string;
  user_tipo?: number;
};