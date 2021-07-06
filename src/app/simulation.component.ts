import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { Inject } from "@angular/core";
import { Pipe, PipeTransform} from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { LOCALE_ID } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    selector: 'simulation',
    templateUrl: './simulation.component.html'
})

export class SimulationComponent {
    public localID: string;
    reserveSimulation: any = {
            "modelId": 1,
            "reservationStart": "2021-07-06T16:08:50.875Z",
            "reservationEnd": "2021-07-07T16:08:50.875Z"
    }
    private selectedCategory = new Subject<any>();
    categorySelected = this.selectedCategory.asObservable();
    categories: any
    models: any

    constructor(private api: ApiService, @Inject( LOCALE_ID ) localID : string){ this.localID = localID; }

    ngOnInit() {
        this.api.getCategories().subscribe(res => {
            this.categories = res
        })
        this.api.getModelsByCategory(1).subscribe(res => {
            this.models = res
        })
    }

    simulate(modelId: any, dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
        this.reserveSimulation = {
            "modelId": modelId,
            "reservationStart": formatDate(dateRangeStart.value, "yyyy-MM-ddTHH:mm:ss", this.localID),
            "reservationEnd": formatDate(dateRangeEnd.value, "yyyy-MM-ddTHH:mm:ss", this.localID)
        }
        this.api.postSimulation(this.reserveSimulation)
    }

    selectCategory(category: any) {
        this.selectedCategory.next(category)
    }
}