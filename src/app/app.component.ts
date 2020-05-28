import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnSpan: number = 2;
  firstName: string = "Avinash";
  lastName: string = "Chawla";
  age: string = '23';
  gender: string = 'Male'
  showDetails: boolean = false;

  toggleDetails(): any {
    this.showDetails = !this.showDetails;
  }
}
