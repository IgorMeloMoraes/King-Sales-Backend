import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getAllUsers() {
    // Simula e Testar o Controller
    return JSON.stringify({ message: 'Hello World' });
  }
}
