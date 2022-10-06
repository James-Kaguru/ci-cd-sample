import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    return `Welcome to Las Noches. I am ${this.configService.get<string>('ESPADA')}, espada number ${this.configService.get<string>('RANK')}. Your app is running on port ${this.configService.get<string>('PORT')}.`;
  }
}
