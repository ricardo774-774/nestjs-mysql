import { Injectable } from "@nestjs/common";
import { HttpModuleOptions, HttpModuleOptionsFactory } from "@nestjs/axios";

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions | Promise<HttpModuleOptions> {
        return {
            headers: {
                'Authorization': 'Bearer 600d7f11231b47c8bc6165524230901',
                'Content-Type': 'application/json'
            }
        }
    }
}