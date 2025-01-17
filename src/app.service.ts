import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloMessage(): object {
    return {
      name: 'WhoWho',
      version: '0.0.1-alpha',
      description: 'A 1001 things generator',
    };
  }
}
