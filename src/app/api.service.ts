import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import { ReserveSimulation } from "./ReserveSimulationInterface";
import { VehicleModel } from "./vehiclemodel.models";

@Injectable()
export class ApiService {
    
    constructor (private http: HttpClient) {}
    postSimulation(reserveSimulation: any) {
        return this.http.post<ReserveSimulation>('https://apicarrental.azurewebsites.net/api/reservations/simulation', reserveSimulation)
        /*.subscribe( res => {
            console.log(res)
            
        })*/
    }

    getCategories() {
        return this.http.get('https://apicarrental.azurewebsites.net/api/vehiclecategories')
    }

    getModelsByCategory(categoryId: any) {
        return this.http.get(`https://apicarrental.azurewebsites.net/api/vehiclecategories/${categoryId}/models`)
    }
    getModelDetails(modelId: any) {
        return this.http.get<VehicleModel>(`https://apicarrental.azurewebsites.net/api/models/${modelId}`)
    }

}