import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";

export class CreateTripTicketDto {
  @IsDateString()
  formDate: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  tripTicketNo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  driverName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  plateNo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  authorizedPassenger: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  placesVisited: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  purpose: string;

  @IsOptional()
  @IsString()
  @MaxLength(150)
  authorizingOfficerName?: string;

  @IsOptional() @IsString() @MaxLength(30) timeDeparture?: string;
  @IsOptional() @IsString() @MaxLength(30) timeArrivalAtPlace?: string;
  @IsOptional() @IsString() @MaxLength(30) timeDepartureFromPlace?: string;
  @IsOptional() @IsString() @MaxLength(30) timeArrivalBack?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  approxDistanceKm?: number;

  // numbers (fuel/oils/speedometer)
  @IsOptional() @Type(() => Number) @IsNumber() fuelBalanceInTank?: number;
  @IsOptional() @Type(() => Number) @IsNumber() fuelIssuedFromStock?: number;
  @IsOptional() @Type(() => Number) @IsNumber() fuelPurchasedDuringTrip?: number;
  @IsOptional() @Type(() => Number) @IsNumber() fuelTotal?: number;
  @IsOptional() @Type(() => Number) @IsNumber() fuelUsedDuringTrip?: number;
  @IsOptional() @Type(() => Number) @IsNumber() fuelBalanceEnd?: number;

  @IsOptional() @Type(() => Number) @IsNumber() gearOilIssued?: number;
  @IsOptional() @Type(() => Number) @IsNumber() lubOilIssued?: number;
  @IsOptional() @Type(() => Number) @IsNumber() greaseIssued?: number;

  @IsOptional() @Type(() => Number) @IsNumber() speedometerBegin?: number;
  @IsOptional() @Type(() => Number) @IsNumber() speedometerEnd?: number;
  @IsOptional() @Type(() => Number) @IsNumber() speedometerDistance?: number;

  @IsOptional() @IsString() remarks?: string;
  @IsOptional() @IsString() @MaxLength(150) driverSignatureName?: string;
  @IsOptional() @IsString() @MaxLength(150) passengerSignatureName?: string;
}
