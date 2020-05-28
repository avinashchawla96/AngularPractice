import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-herocount',
  templateUrl: './herocount.component.html',
  styleUrls: ['./herocount.component.css']
})
export class HerocountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() TotalHero: Hero[]


}
