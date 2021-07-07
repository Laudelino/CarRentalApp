import { templateJitUrl } from "@angular/compiler";
import { Component, Inject, Injectable, OnInit } from "@angular/core";
import { ReservationService } from "./reservation.service";

@Component({
    selector: 'customerhistory',
    templateUrl: './customerHistory.component.html'
})

export class CustomerHistory implements OnInit {

    
    constructor(public reservationService: ReservationService) { 
    
    }

    ngOnInit(): void {
        this.reservationService.loadReservations()
        .subscribe()
    }
}