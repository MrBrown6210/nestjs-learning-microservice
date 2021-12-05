import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/items/:id')
  getById(@Param('id') id: number) {
    return this.appService.getItemById(id);
  }

  @Post()
  create(@Body() createItemDto) {
    return this.appService.createItem(createItemDto);
  }
}
