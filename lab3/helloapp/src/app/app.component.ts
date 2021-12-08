import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
    <label>Введите имя:</label>
    <input [(ngModel)]="name" placeholder="name">
    <button (click)="add()">Добавить</button>
    <ol>
      <ng-container *ngFor="let name of names">
        <li>{{name}}</li>
      </ng-container>
    <ol>
  `
})
export class AppComponent {
  name : string  = "";
  names : string[] = [];

  add() {
    this.names.push(this.name);
  }
}