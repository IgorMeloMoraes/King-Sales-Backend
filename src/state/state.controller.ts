import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';
import { StateEntity } from './interfaces/state.entity';

@Controller('state')
export class StateController {
  // Busca todos os estados que estão em memória com get
  constructor(private readonly stateService: StateService) {}

  @Get()
  getAllState(): Promise<StateEntity[]> {
    return this.stateService.getAlState();
  }
}
