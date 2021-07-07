export interface ReserveSimulation{
    modelId: string,
    reservationStart: Date,
    reservationEnd: Date,
    rentalRate: number,
    estimatedTotal:number
  }