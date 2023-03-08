import { Application } from 'express';
import { ROUTES_CONSTANTS } from '../configs/constants/RoutesContants';
import { CommonRoutes } from './CommonRoutes';
import { ExtractTokenProvider } from '../providers/ExtractTokenProvider';
import { UserController } from '../controllers/UserController';

export class UsersRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, "UsersRoutes");
  }

  initRoutes(): Application {
    this.app.route(ROUTES_CONSTANTS.users.create)
      .post(UserController.createUser);
    this.app.route(ROUTES_CONSTANTS.users.getAll)
      .get(ExtractTokenProvider.extract, UserController.getAllUser);
    this.app.route(ROUTES_CONSTANTS.users.getById)
      .get(ExtractTokenProvider.extract, UserController.getOne);
    this.app.route(ROUTES_CONSTANTS.users.update)
      .put(ExtractTokenProvider.extract, UserController.updateUser);
    this.app.route(ROUTES_CONSTANTS.users.delete)
      .delete(ExtractTokenProvider.extract, UserController.deleteUser);
    return this.app;
  }
}