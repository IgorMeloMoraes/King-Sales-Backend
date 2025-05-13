import { createUserDTO } from './dtos/createUser.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  createUser(@Body() createUser: createUserDTO) {
    return {
      ...createUser,
      password: undefined,
    };
  }
}
