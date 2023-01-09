import { Controller, Post, Get, Res, HttpStatus } from '@nestjs/common';
import { WeathersService } from './weathers.service';

@Controller('weathers')
export class WeathersController {

    constructor(private weathersService: WeathersService) {}

    @Get()
    getCountryInfo(
        @Res() res, 
    ) {
        const info = this.weathersService.getCountryInfo();
        return res.status(HttpStatus.OK).json({
            info,
          }); 
    }

}
