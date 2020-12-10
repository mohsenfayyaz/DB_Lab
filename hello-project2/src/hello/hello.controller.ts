import { Body, Controller, Get, Header, Post, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger/dist/decorators/api-query.decorator';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { PersonDto } from './DTO/person.dto';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
    constructor(private HelloService: HelloService) { }


    @Post('welcome')
    @ApiResponse({ status: 200, description: 'Say Hello!!!' })
    @Header('Content-Type', 'application/json')
    async sayWelcome(@Body() personDto: PersonDto): Promise<{ data: string }> {
        console.log(personDto)
        let msg = await this.HelloService.welcome(personDto);
        return { data: msg };
    }

    @ApiResponse({ status: 200 })
    @ApiQuery({
        name: 'name',
        required: true,
        type: String,
        // enum : ["All", "Browser", "Device"]
    })
    @ApiQuery({
        name: 'year',
        required: false,
        type: Number,
        description: `you can ignore this`
    })
    @Get('welcome')
    async sayWelcomeGet(@Query('name') name, @Query('year') year): Promise<{ data: string }> {
        console.log(name, year)
        let msg = await this.HelloService.welcome({ name: name, year: year })
        return { data: msg }
    }

}
