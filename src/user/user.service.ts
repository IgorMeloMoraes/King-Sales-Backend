import { createUserDTO } from './dtos/createUser.dto';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './interfaces/user.entity'; // Adjust the path as needed
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  // Injetar nossos repositórios
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDTO: createUserDTO): Promise<UserEntity> {
    // Criptografia da senha
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDTO.password, saltOrRounds);
    // Teste de senha criptografada
    //console.log('Senha criptografada:', passwordHashed);

    // Salvar o usuário no banco de dados
    return this.userRepository.save({
      ...createUserDTO,
      typeUser: 1,
      password: passwordHashed,
    });

    // Armazenar em memória (apenas para fins de exemplo)
    // const user: UserEntity = {
    //   ...createUserDTO,
    //   id: this.users.length + 1,
    //   password: passwordHashed,
    // };

    // this.users.push(user);

    // return user;
  }

  // Função para buscar todos os usuários
  // Vamos no service e buscamos todos os usuários que esta em memória, ele esta no objeto users
  // Toda vez que damos um post ele salva esse objeto em memória e coloca um id novo.
  // Busca no userRepositoty todas as funções
  getAlUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
