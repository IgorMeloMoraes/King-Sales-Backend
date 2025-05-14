import { createUserDTO } from './dtos/createUser.dto';
import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface'; // Adjust the path as needed
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDTO: createUserDTO): Promise<User> {
    // Criptografia da senha
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDTO.password, saltOrRounds);
    // Teste de senha criptografada
    //console.log('Senha criptografada:', passwordHashed);

    // Armazenar em memória (apenas para fins de exemplo)
    const user: User = {
      ...createUserDTO,
      id: this.users.length + 1,
      password: passwordHashed,
    };

    this.users.push(user);

    return user;
  }

  // Função para buscar todos os usuários
  // Vamos no service e buscamos todos os usuários que esta em memória, ele esta no objeto users
  // Toda vez que damos um post ele salva esse objeto em memória e coloca um id novo.
  getAlUser(): Promise<User[]> {
    return Promise.resolve(this.users);
  }
}
