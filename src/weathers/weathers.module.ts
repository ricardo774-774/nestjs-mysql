import { Module } from '@nestjs/common';
import { WeathersController } from './weathers.controller';
import { WeathersService } from './weathers.service';
import {  HttpModule, HttpService } from "@nestjs/axios";
import { HttpConfigService } from 'httpService.config';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService
    }),
    WeathersModule
  ],
  controllers: [WeathersController],
  providers: [WeathersService]
})
export class WeathersModule {}
