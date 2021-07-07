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

    loadReservations(cpf: any): Observable<void> {
        return this.http.get<[]>(`https://apicarrental.azurewebsites.net/api/reservations/customer/${cpf}`)
        .pipe(map(data => {
            this.reservations = data;
            return;
        }));
    }
}