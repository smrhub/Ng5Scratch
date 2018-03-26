import { Injectable } from '@angular/core'; // injectatble designated as a component
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable() // component decorator (injectable decorator)
export class DataService {

  private RegisteredNames = new BehaviorSubject<any>([]); // new behavior subject
  Register_Name = this.RegisteredNames.asObservable(); // custom new property
  constructor() { }

  // custom mtd to accessible by another components
  UpdateName(Register_Names) {
    this.RegisteredNames.next(Register_Names);
  }
}
