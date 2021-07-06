import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Inject } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    
    form: any

    constructor(private auth: AuthService, private fb: FormBuilder) { 
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })

    }

    public login(credentials: any){
        this.auth.login(credentials)
    }
}