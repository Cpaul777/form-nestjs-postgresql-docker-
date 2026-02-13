import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Index,
} from "typeorm";

@Entity({ name: "trip_tickets" })
export class TripTicket {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  formDate: string;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 60 })
  tripTicketNo: string;

  // A. Administrative
  @Column({ type: "varchar", length: 150 })
  driverName: string;

  @Column({ type: "varchar", length: 50 })
  plateNo: string;

  @Column({ type: "varchar", length: 200 })
  authorizedPassenger: string;

  @Column({ type: "varchar", length: 255 })
  placesVisited: string;

  @Column({ type: "varchar", length: 255 })
  purpose: string;

  @Column({ type: "varchar", length: 150, nullable: true })
  authorizingOfficerName?: string;

  // B. Driver times (string for flexible AM/PM format)
  @Column({ type: "varchar", length: 30, nullable: true })
  timeDeparture?: string;

  @Column({ type: "varchar", length: 30, nullable: true })
  timeArrivalAtPlace?: string;

  @Column({ type: "varchar", length: 30, nullable: true })
  timeDepartureFromPlace?: string;

  @Column({ type: "varchar", length: 30, nullable: true })
  timeArrivalBack?: string;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  approxDistanceKm?: number;

  // Fuel (liters)
  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  fuelBalanceInTank?: number;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  fuelIssuedFromStock?: number;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  fuelPurchasedDuringTrip?: number;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  fuelTotal?: number;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  fuelUsedDuringTrip?: number;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  fuelBalanceEnd?: number;

  // Oils/grease
  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  gearOilIssued?: number;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  lubOilIssued?: number;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  greaseIssued?: number;

  // Speedometer
  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  speedometerBegin?: number;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  speedometerEnd?: number;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
  speedometerDistance?: number;

  @Column({ type: "text", nullable: true })
  remarks?: string;

  @Column({ type: "varchar", length: 150, nullable: true })
  driverSignatureName?: string;

  @Column({ type: "varchar", length: 150, nullable: true })
  passengerSignatureName?: string;

  @CreateDateColumn()
  createdAt: Date;
}
