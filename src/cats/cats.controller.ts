import { Controller, Get, Query, Post, Body, Put, Param, Delete, HttpCode, Header, Req } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}

@Controller('cats2')
export class CatsController2{
@Post()
@HttpCode(204)
@Header('Cache-Control', 'none')
async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}

  @Get('ab*cd')
  //@Redirect('https://nestjs.com', 301)
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get(':id')
 findOne(@Param() params: any): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
}
