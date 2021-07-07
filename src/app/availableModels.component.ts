import { templateJitUrl } from "@angular/compiler";
import { Component, Inject, Injectable, OnInit } from "@angular/core";
import { AvailableModelsService } from "./availableModels.service";
import { AuthService } from './auth.service';

@Component({
    selector: 'availablemodels',
    templateUrl: './availableModels.component.html',
    styleUrls: ['./availableModels.component.css']
})

export class AvailableModels implements OnInit {
    
   
    constructor(public modelsService: AvailableModelsService, public auth: AuthService) { 
    
    }

    ngOnInit(): void {
        this.modelsService.loadAvailableModels()
        .subscribe()
    }
}