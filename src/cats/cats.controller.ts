import { Controller, Get, Req, Param } from '@nestjs/common';
import { Request } from 'express';
@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request:Request):string{
        return 'This action returns all cats'
    }
    @Get(':id')
    findOne(@Param() params){
        return `This action returns a cat #${params.id}`;
    }
}

