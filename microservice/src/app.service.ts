import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getById(id: number): any {
    return `wow ${id}`;
  }

  createItem(): any {
    return 'wowowow';
  }
}
