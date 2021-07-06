import { Component } from '@angular/core';
import { VehiclesComponent } from './vehicles.component';
import { SimulationComponent } from './simulation.component';

@Component({
  selector: 'app-root',
  template: '<nav></nav><router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'Aluguel de Carros';
}
