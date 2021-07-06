import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";

@Injectable()
export class ApiService {
    
    private selectedCategory = new Subject<any>();
    categorySelected = this.selectedCategory.asObservable();

    constructor (private http: HttpClient) {}
    postSimulation(reserveSimulation: any) {
        this.http.post('https://apicarrental.azurewebsites.net/api/reservations/simulation', reserveSimulation).subscribe( res => {
            console.log(res)
        })
    }

    getCategories() {
        return this.http.get('https://apicarrental.azurewebsites.net/api/vehiclecategories')
    }

    getModelsByCategory(categoryId: any) {
        return this.http.get('https://apicarrental.azurewebsites.net/api/models')
    }

    selectCategory(category: any) {
        this.selectedCategory.next(category)
    }
}