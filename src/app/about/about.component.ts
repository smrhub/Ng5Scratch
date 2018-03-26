import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// angular/router is a library .. ActivatedRoute is an instance // this will give access to the route parameter
import { Router } from '@angular/router'; // import router from angular library
import { DataService } from '../data.service'; // import service to access the other component values.

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {
  RegisterName: any;

  // instance of activatedroute use dependency injection
  // get the parameter value to process further(db hit/notedown the parameter, like that..), here catch up on log
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(result => console.log(result.id)); // subscribe use for access(either data,..)
    // store the value in any property, pass to api get the result based on id.
  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this._data.Register_Name.subscribe(response => this.RegisterName = response);  // access the data from home component and have it on _data (service)
  }
  NavigateRoute() {
    this.router.navigate(['']); // matches with router path value
  }

}
