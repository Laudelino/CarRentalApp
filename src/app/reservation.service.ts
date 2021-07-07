import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
import { Reservation } from "./Reservation";

@Injectable()
export class ReservationService {

    constructor(private http: HttpClient){

     }

    public reservations: Reservation[] = [];

    loadReservations(): Observable<void> {
        return this.http.get<[]>("https://apicarrental.azurewebsites.net/api/reservations/customer/12345678999")
        .pipe(map(data => {
            this.reservations = data;
            return;
        }));
    }
}