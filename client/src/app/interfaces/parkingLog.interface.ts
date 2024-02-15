export interface IParkingLog {
  _id: string,
  license: string,
  slot: string,
  status: "occupied" | "checked-out",
  fee?: number,
  checkInTimestamp: Date,
  checkOutTimestamp?: Date
}