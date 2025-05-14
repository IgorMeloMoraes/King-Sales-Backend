import { createUserDTO } from './dtos/createUser.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUser: createUserDTO): Promise<User> {
    return this.userService.createUser(createUser);
  }

  // Buscar todos os usuários que esta em memória
  // Função que quando der um get ele vai buscar todos os usuários que estão em memória
  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.getAlUser();
  }
}
