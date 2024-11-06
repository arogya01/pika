import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/devConfigService';

@Injectable()
export class AppService {
  constructor(
    @Inject('CONFIG_SERVICE') private configService: DevConfigService,
    @Inject('CONFIG') private config: { port: string },
  ) {}
  getHello(): string {
    return `Hello World! ${this.configService.getDbHost()} ${this.config.port}`;
  }
}
