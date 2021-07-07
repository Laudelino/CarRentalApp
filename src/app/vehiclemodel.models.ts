export interface VehicleModel
{
    id: number,
    name: string,
    manufacturer: {
      id: number,
      name: string
    },
    rentalRate: number,
    fuelType: {
      id: number,
      name: string
    },
    trunkSize: number,
    vehicleCategory: {
      id: number,
      name: string
    }
  }