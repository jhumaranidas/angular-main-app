import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform-group',
  templateUrl: './reactiveform-group.component.html',
  styleUrls: ['./reactiveform-group.component.scss']
})
export class ReactiveformGroupComponent {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailId: new FormControl(''),
    mobileNumber: new FormControl(''),
    address: new FormControl('')
  });

  onSubmit(){
    console.warn(this.userForm.value);
  }

}
