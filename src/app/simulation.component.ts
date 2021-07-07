import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { Inject } from "@angular/core";
import { Pipe, PipeTransform} from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { LOCALE_ID } from "@angular/core";
import { Subject } from "rxjs";
import { ReserveSimulation } from "./ReserveSimulationInterface";
import { VehicleModel } from "./vehiclemodel.models";
import { AuthService } from './auth.service';

@Component({
    selector: 'simulation',
    templateUrl: './simulation.component.html'
})



export class SimulationComponent {
    public localID: string;
    selectedCategory: string = '';

    reserveSimulation: any = {
            "modelId": 1,
            "reservationStart": "2021-07-06T16:08:50.875Z",
            "reservationEnd": "2021-07-07T16:08:50.875Z"
    }

    categories: any
    models: any
 
    resultmodelId: any
    resultrentalRate: any
    resultreservationStart: any
    resultreservationEnd: any
    resultestimatedTotal: any
    resultModelName: any
    resultManufacturerName: any
    resultFuelTypeName: any
    resultTrunkSize: any
    resultCategory: any


    constructor(private api: ApiService, @Inject( LOCALE_ID ) localID : string, public auth: AuthService){ this.localID = localID; }

    ngOnInit() {
        this.api.getCategories().subscribe(res => {
            this.categories = res
        })
        this.api.getModelsByCategory(1).subscribe(res => {
            this.models = res
        })
    }

    get isSimulated() {
        return (!!this.resultmodelId && !!this.resultModelName)
    }

    simulate(modelId: any, dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
        console.log(modelId)
        this.reserveSimulation = {
            "modelId": modelId,
            "reservationStart": formatDate(dateRangeStart.value, "yyyy-MM-ddTHH:mm:ss", this.localID),
            "reservationEnd": formatDate(dateRangeEnd.value, "yyyy-MM-ddTHH:mm:ss", this.localID)
        }
        this.api.postSimulation(this.reserveSimulation)
            .subscribe((data: ReserveSimulation) => { 
                this.resultmodelId = data.modelId
                this.resultrentalRate = data.rentalRate  
                this.resultestimatedTotal = data.estimatedTotal
                this.resultreservationStart = formatDate(data.reservationStart, "dd/MM/yyyy", this.localID)    
                this.resultreservationEnd = formatDate(data.reservationEnd, "dd/MM/yyyy", this.localID)              
            })       

        this.api.getModelDetails(modelId)
            .subscribe((data: VehicleModel) => {
                this.resultModelName = data.name
                this.resultManufacturerName = data.manufacturer.name
                this.resultFuelTypeName = data.fuelType.name
                this.resultTrunkSize = data.trunkSize
                this.resultCategory = data.vehicleCategory.name
            })
    }

    selectCategoryChangeHandler (event: any) {
        this.selectedCategory = event.value;
        this.api.getModelsByCategory(this.selectedCategory).subscribe(res => {
            this.models = res
        })
        
    }

}