import { Request, Response } from "express";
import { UserService } from "../services/Users/UserService";

export class UserController {

  static async createUser(req: Request, res: Response): Promise<Response> {
    const user = req.body;
    try {
      await UserService.CreateUserService.execute(user);
      return res.status(201).json("User created successfully");
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        message: "\u{1F6AB} " + error.message || 'Unexpected error.'
      });
    }
  }

  static async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      await UserService.DeleteUserService.execute(id);
      return res.status(200).json("User deleted successfully");
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        message: "\u{1F6AB} " + error.message || 'Unexpected error.'
      });
    }
  }

  static async updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const user = req.body;
    user.id = id;
    try {
      await UserService.UpdateUserService.execute(user);
      return res.status(200).json("User updated successfully");
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        message: "\u{1F6AB} " + error.message || 'Unexpected error.'
      });
    }
  }

  static async getAllUser(req: Request, res: Response): Promise<Response> {
    try {
      const users = await UserService.GetAllUsersService.execute();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        message: "\u{1F6AB} " + error.message || 'Unexpected error.'
      });
    }
  }

  static async getOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const user = await UserService.GetOneUserService.execute({ id });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        message: "\u{1F6AB} " + error.message || 'Unexpected error.'
      });
    }
  }
  
}