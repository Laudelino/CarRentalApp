import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { ReservationService } from './reservation.service';

import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { VehiclesComponent } from './vehicles.component';
import { SimulationComponent } from './simulation.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { AuthInterceptor } from './auth.interceptor';
import { CustomerHistory } from './customerHistory.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'simulation', component: SimulationComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'history', component: CustomerHistory }
]

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    SimulationComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    CustomerHistory
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,    
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  providers: [
    ApiService,
    AuthService,
    ReservationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
