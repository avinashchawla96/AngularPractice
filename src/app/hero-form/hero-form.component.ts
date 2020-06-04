import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactform = new FormGroup({
    email: new FormControl('', Validators.required),
    subject: new FormControl('', [
      Validators.minLength(10),
      Validators.required
    ])
  })



  get email() {
    return this.contactform.get('email');
  }

  get subject() {
    return this.contactform.get('subject');
  }

  onSubmit(form) {
    console.log(form.value);
  }

}
