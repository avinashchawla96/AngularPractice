import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  columnSpan: number = 2;
  firstName: string = "Avinash";
  lastName: string = "Chawla";
  age: string = '23';
  gender: string = 'Male'
  showDetails: boolean = false;

  toggleDetails(): any {
    this.showDetails = !this.showDetails;
  }

  ngOnInit(): void {
  }

}
