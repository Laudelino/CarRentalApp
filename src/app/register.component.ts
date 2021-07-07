import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Inject } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    
    form: any

    constructor(public auth: AuthService, private fb: FormBuilder) { 
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

}