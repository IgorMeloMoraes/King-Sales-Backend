import { createUserDTO } from './dtos/createUser.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUser: createUserDTO): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }

  // Buscar todos os usuários que esta em memória
  // Função que quando der um get ele vai buscar todos os usuários que estão em memória
  @Get()
  getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAlUser();
  }
}
