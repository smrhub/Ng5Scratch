import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('RegisteredName', [
      transition('*=>*', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  registerCount: number;
  btnValue: string = 'Lets Register';
  TwoWayBindingText: string = '';
  RegisteredName = [];
  constructor(private _data: DataService) { } // create instance on dependency injection.. private value to access

  ngOnInit() {
    this.registerCount = this.RegisteredName.length;
    this._data.Register_Name.subscribe(response => this.RegisteredName = response);
    this._data.UpdateName(this.RegisteredName); // update what ever the value on registeredname into service behaviorsubject
  }
  SaveRegistration() {
    this.RegisteredName.push(this.TwoWayBindingText);
    this.TwoWayBindingText = '';
    this.registerCount = this.RegisteredName.length;
    this._data.UpdateName(this.RegisteredName);
  }
  RemoveRegistration(index) {
    this.RegisteredName.splice(index, 1);
    this.registerCount = this.RegisteredName.length;
    this._data.UpdateName(this.RegisteredName);
  }

}
