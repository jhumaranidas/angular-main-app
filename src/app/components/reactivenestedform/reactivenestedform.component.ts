import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactivenestedform',
  templateUrl: './reactivenestedform.component.html',
  styleUrls: ['./reactivenestedform.component.scss']
})
export class ReactivenestedformComponent {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailId: new FormControl(''),
    mobileNumber: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  onSubmit(){
    console.warn(this.userForm.value);
    console.warn(this.userForm.controls.address.value);
  }
}
