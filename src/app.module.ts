import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TripTicketsModule } from "./trip-tickets/trip-tickets.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgrespass",
      database: "trip_ticket_db",
      autoLoadEntities: true,
      synchronize: true, //  dev only (auto-creates tables). Turn OFF in production.
    }),
    TripTicketsModule,
  ],
})
export class AppModule {}
