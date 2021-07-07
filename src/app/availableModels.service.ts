import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
import { VehicleModel, ReserveSimulation, Reservation } from "./Reservation";

@Injectable()
export class AvailableModelsService {

    constructor(private http: HttpClient){

     }

    public availableModels: VehicleModel[] = [];
    public selectedModel: VehicleModel
    public simulationResult: ReserveSimulation

    loadAvailableModels(): Observable<void> {
        return this.http.get<[]>("https://apicarrental.azurewebsites.net/api/models/available")
        .pipe(map(data => {
            this.availableModels = data;
            return;
        }));
    }

    loadModel(modelId: any): Observable<void> {
        return this.http.get<VehicleModel>(`https://apicarrental.azurewebsites.net/api/models/${modelId}`)
        .pipe(map(data => {
            this.selectedModel = data;
            return;
        }));
    }

    get isModelLoaded() {
        return (!!this.selectedModel.id)
    }


    postSimulation(reserveSimulation: any): Observable<void> {
        return this.http.post<ReserveSimulation>('https://apicarrental.azurewebsites.net/api/reservations/simulation', reserveSimulation)
        .pipe(map(data => {
            this.simulationResult = data;
            return;
        }));
    }

    postReserve(reserverequest: any): Observable<void> {
        return this.http.post<Reservation>('https://apicarrental.azurewebsites.net/api/reservations', reserverequest)
        .pipe(map(data => {
            return;
        }));
    }

    get isSimulated() {
        return (!!this.simulationResult.rentalRate)
    }
}