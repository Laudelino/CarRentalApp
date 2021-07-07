import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
        <button mat-button routerLink="/">Inicio</button>
        <button *ngIf="auth.isAuthenticated" mat-button routerLink="/history">Minhas Reservas</button>
        <span style="flex: 1 1 auto;"></span>
        <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Cadastrar</button>
        <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Entrar</button>
        <button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()" routerLink="/login">Sair</button>
    </mat-toolbar>
  `,
})
export class NavComponent {
    constructor (public auth: AuthService) {}
}
