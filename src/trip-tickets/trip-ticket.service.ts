import { Injectable, ConflictException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TripTicket } from "./trip-tickets.entity";
import { CreateTripTicketDto } from "./dto/create-trip-ticket.dto";

@Injectable()
export class TripTicketsService {
  constructor(
    @InjectRepository(TripTicket)
    private repo: Repository<TripTicket>,
  ) {}

  async create(dto: CreateTripTicketDto) {
    // Optional: compute totals on server-side too (trust server, not client)
    const fuelTotal =
      (dto.fuelBalanceInTank ?? 0) +
      (dto.fuelIssuedFromStock ?? 0) +
      (dto.fuelPurchasedDuringTrip ?? 0);

    const fuelBalanceEnd = fuelTotal - (dto.fuelUsedDuringTrip ?? 0);

    const entity = this.repo.create({
      ...dto,
      fuelTotal: dto.fuelTotal ?? fuelTotal,
      fuelBalanceEnd: dto.fuelBalanceEnd ?? fuelBalanceEnd,
    });

    console.log("CREATED A DATA");

    try {
      return await this.repo.save(entity);
    } catch (e: any) {
      // TripTicketNo unique violation
      if (e?.code === "23505") {
        throw new ConflictException("Trip Ticket No. already exists.");
      }
      throw e;
    }
  }

  findAll() {
    return this.repo.find({ order: { createdAt: "DESC" } });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }
}
