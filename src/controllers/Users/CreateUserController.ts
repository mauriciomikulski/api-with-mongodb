import { Request, Response } from 'express';
import { services } from '../../services';

export class CreateUserController {/* </snippet> */
  static async handle(req: Request, res: Response): Promise<Response> {
    const { user_name, user_email, user_login, user_password, user_tipo } = req.body;
    const user = { user_name, user_email, user_login, user_password, user_tipo };
    try {
      await services.CreateUserService.execute(user);
      return res.status(201).json("User created successfully");
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        message: "\u{1F6AB} " + error.message || 'Unexpected error.'
      });
    }
  }
}