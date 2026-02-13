import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { TripTicketsService } from "./trip-ticket.service";
import { CreateTripTicketDto } from "./dto/create-trip-ticket.dto";

@Controller("trip-tickets")
export class TripTicketsController {
  constructor(private service: TripTicketsService) {}

  @Post()
  create(@Body() dto: CreateTripTicketDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
}
