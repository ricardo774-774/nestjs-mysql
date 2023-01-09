import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { BASEURL } from 'common/api.resource';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeathersService {

    constructor(
        private readonly httpService: HttpService
    ) {}

    baseUrl = BASEURL.baseUrlWeatherApi;

    async getCountryInfo() {
        const { data } = await firstValueFrom(this.httpService.get(this.baseUrl))
        return data;
    }


}
