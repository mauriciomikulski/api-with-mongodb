import { UsersId, CreateUserRequest } from "../types/User";
import { Users } from "../entity/Users";
import { appDataSource } from "../data-source";

export class UserRepository {
  private userRepository = appDataSource.getRepository<Users>(Users);

  public async create(user: CreateUserRequest) {
    return await this.userRepository.save(user);
  }

  public async update(id: number, user: Users) {
    return await this.userRepository.update(id, user);
  }

  public async findOne(id: UsersId) {
    return await this.userRepository.findOneBy(id);
  }

  public async findAll() {
    return await this.userRepository.find();
  }

  public async delete(id: UsersId) {
    return await this.userRepository.delete(id);
  }

  public async findByEmail(email: string) {
    return await this.userRepository.findOneBy({ user_email: email });
  }
}