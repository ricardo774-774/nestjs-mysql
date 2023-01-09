import { Type } from "class-transformer";
import {
  IsString,
  IsIn,
  ValidateNested,
  IsOptional
} from "class-validator";

export interface ApiResponseDto {
    name:            string;
    region:          string;
    country:         string;
    lat:             number;
    lon:             number;
    tz_id:           string;
    localtime_epoch: number;
    localtime:       string;
}