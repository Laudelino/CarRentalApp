export class Manufacturer {
    id: number;
    name: string;
}

export class FuelType {
    id: number;
    name: string;
}

export class VehicleCategory {
    id: number;
    name: string;
}

export class VehicleModel {
    id: number;
    name: string;
    manufacturer: Manufacturer;
    rentalRate: number;
    fuelType: FuelType;
    trunkSize: number;
    vehicleCategory: VehicleCategory;
}

export class Vehicle {
    id: number; 
    plate: string;
    vehicleModel: VehicleModel;
    year: number;
}

export class Reservation {
    id: number;
    vehicleId: number;
    customerCPF: string;
    reservationStart: Date;
    reservationEnd: Date;
    rentalRate: number;
    estimatedTotal: number;
    returnDate: Date;
    returnTotal: number;
    isClean: boolean;
    hasFullTank: boolean;
    hasScratches: boolean;
    hasDents: boolean;
    status: string;
    vehicle: Vehicle;
}
