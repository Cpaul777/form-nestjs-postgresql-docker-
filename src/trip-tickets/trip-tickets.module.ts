import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TripTicket } from "./trip-tickets.entity";
import { TripTicketsController } from "./trip-ticket.controller";
import { TripTicketsService } from "./trip-ticket.service";

@Module({
  imports: [TypeOrmModule.forFeature([TripTicket])],
  controllers: [TripTicketsController],
  providers: [TripTicketsService],
})
export class TripTicketsModule {}
