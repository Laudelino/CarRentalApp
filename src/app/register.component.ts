import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Inject } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    
    form: any

    constructor(private api: ApiService, private fb: FormBuilder) { 
        this.form = fb.group({
            cpf: ['', Validators.required],
            name: ['', Validators.required],
            password: ['', Validators.required],
            cep: [''],
            street: [''],
            number: [''],
            complement: [''],
            city: [''],
            state: [''],
            birthdate: ['']
        })

    }

    register() {
        console.log(this.form)
    }

}