import { Component } from '@angular/core';
import { VehiclesComponent } from './vehicles.component';
import { SimulationComponent } from './simulation.component';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
        <button mat-button routerLink="/">Inicio</button>
        <button mat-button routerLink="/simulation">Simular Reserva</button>
        <span style="flex: 1 1 auto;"></span>
        <button mat-button routerLink="/register">Cadastrar</button>
    </mat-toolbar>
  `,
})
export class NavComponent {
}
