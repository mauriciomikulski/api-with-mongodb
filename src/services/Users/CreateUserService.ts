import { Users } from "../../entity/Users";
import { hash } from "bcryptjs"
import { log } from "../../utils/LogHelper";
import { LOG_CONSTANTS } from "../../configs/constants/LogConstants";
import { MailTrapService } from "../../services/MailTrap/MailTrap.service";
import { UserRepository } from "../../repository/UserRepository";
import { CreateUserRequest } from "../../types/User";
export class CreateUserService {

  private static userRepository = new UserRepository();

  static async execute(user: CreateUserRequest): Promise<Users | Error> {
    try {
      const NAMESPACE = "CreateUserService";

      log(NAMESPACE, `Creating user: ${user.user_login}`, LOG_CONSTANTS.LOG_LEVEL.INFO);  

      if (await this.userExists(user)) { return new Error("User aready exists"); }

      const hashedPassword = await hash(user.user_password, 10);
      await this.userRepository.create({ ...user, user_password: hashedPassword });
      await this.sendRegisterEmail(user);
      
    } catch (error) {
      log("CreateUserService", `Error creating user: ${error}`, LOG_CONSTANTS.LOG_LEVEL.ERROR);
      return new Error(error);
    }
  }

  private static async userExists(user: CreateUserRequest): Promise<boolean> {
    const userExists = await this.userRepository.findByEmail(user.user_email);
    return !!userExists;
  }

  private static async sendRegisterEmail(user: CreateUserRequest) {
    await MailTrapService.sendMail({
      to: {
        user_name: user.user_name,
        user_email: user.user_email
      },
      from: {
        user_name: "Equipe Jintay",
        user_email: "jintaybr@gmail.com"
      },
      subject: "Seja Bem-Vindo ao meu site",
      body: "<p>Sua conta foi criada com sucesso.</p>"
    });
  }
}