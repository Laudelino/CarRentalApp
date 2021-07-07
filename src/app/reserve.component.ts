import { Component, Inject, Injectable, OnInit } from "@angular/core";
import { AvailableModelsService } from "./availableModels.service";
import { AuthService } from './auth.service';
import { ActivatedRoute } from "@angular/router";
import { formatDate } from '@angular/common';
import { LOCALE_ID } from "@angular/core";
import { ReserveSimulation } from "./Reservation";
import { Router } from "@angular/router";

@Component({
    selector: 'reserve',
    templateUrl: './reserve.component.html'
})

export class ReserveComponent implements OnInit {
    public localID: string;
   
    constructor(public modelsService: AvailableModelsService, public auth: AuthService, private route: ActivatedRoute, @Inject( LOCALE_ID ) localID : string, private router: Router) { 
        this.localID = localID;
    }



    ngOnInit(): void {
        this.modelsService.simulationResult = new ReserveSimulation
        var modelId = this.route.snapshot.paramMap.get('modelId')
        this.modelsService.loadModel(modelId)
        .subscribe()
    }

    simulate(modelId: any, dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
        var reserveSimulation = {
            "modelId": modelId,
            "reservationStart": formatDate(dateRangeStart.value, "yyyy-MM-ddTHH:mm:ss", this.localID),
            "reservationEnd": formatDate(dateRangeEnd.value, "yyyy-MM-ddTHH:mm:ss", this.localID)
        }
        this.modelsService.postSimulation(reserveSimulation)
            .subscribe()       
    }

    reserve(modelId: any, dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
        var cpf = localStorage.getItem('cpf')
        var reserverequest = {
            "modelId": modelId,
            "customerCPF": cpf,
            "reservationStart": formatDate(dateRangeStart.value, "yyyy-MM-ddTHH:mm:ss", this.localID),
            "reservationEnd": formatDate(dateRangeEnd.value, "yyyy-MM-ddTHH:mm:ss", this.localID),
            rentalRate: this.modelsService.simulationResult.rentalRate,
            estimatedTotal: this.modelsService.simulationResult.estimatedTotal
        }
        this.modelsService.postReserve(reserverequest)
            .subscribe()  
        
        this.router.navigate(['/history'])     
    }
}