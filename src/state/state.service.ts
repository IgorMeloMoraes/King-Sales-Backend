import { Injectable } from '@nestjs/common';
import { StateEntity } from './interfaces/state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StateService {
  // Função para buscar todos os estados
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>,
  ) {}

  getAlState(): Promise<StateEntity[]> {
    return this.stateRepository.find();
  }
}
