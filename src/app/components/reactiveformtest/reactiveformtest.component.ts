import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveformtest',
  templateUrl: './reactiveformtest.component.html',
  styleUrls: ['./reactiveformtest.component.scss']
})
export class ReactiveformtestComponent {
  constructor(private formBuilder: FormBuilder) {}

  // registrationForm = this.formBuilder.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.formBuilder.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: [''],
  //   }),
  // });

}
