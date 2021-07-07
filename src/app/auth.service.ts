import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import { Router } from "@angular/router";

export interface customerj{
    token: string,
    customer: {
      name: string,
      cpf: string,
      birthdate: string,
      cep: string,
      street: string,
      number: string,
      complement: string,
      city: string,
      state: string
    }
  }

@Injectable()
export class AuthService {

    constructor (private http: HttpClient, private router: Router) {}
    
    get isAuthenticated() {
        return !!localStorage.getItem('token')
    }

    register(registry: any) {
        this.http.post('https://apicarrental.azurewebsites.net/api/customer', registry)
        .subscribe()
        this.router.navigate(['/login'])
    }

    login(credentials: any) {
    
        this.http.post<customerj>('https://apicarrental.azurewebsites.net/api/token', credentials).subscribe(
            (data: customerj) =>  (
                    localStorage.setItem('token', data.token),
                    localStorage.setItem('cpf', data.customer.cpf),
                    localStorage.setItem('name', data.customer.name)
                    )
        );
        this.router.navigate(['/'])
    }

    logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('cpf')
        localStorage.removeItem('name')
    }
}