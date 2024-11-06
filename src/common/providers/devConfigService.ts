import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfigService {
  DBHOST = 'localhost';
  getConfig() {
    return {
      port: 3000,
    };
  }
  getDbHost() {
    return this.DBHOST;
  }
}
