import { Controller, Get, Post, Req, Body, Param, Request} from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  findAll(@Req() request: Request): {} {
    return [{make: 'honda', model: 'accord'},
            {make: 'subaru', model: 'outback'},
            {make: 'fiat', model: '123 spider'}];
  }

  @Get(':id')
  findOne(@Req() request: Request): {} {
    return {id: 25, make: 'tesla', model: 'model x'}
  }

  @Post()
  async create(@Body() carParams) {
    return `I got your post request ! 
    You want to create a ${carParams.make}`;
  }

  @Post(':id')
  async update(@Body() carParams, @Param() params) {
    return `I got your post request ! 
    You want to edit a ${carParams.make} belonging to
    ${params.id}`;
  }
  

}
