import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-form-builder-example',
  templateUrl: './form-builder-example.component.html',
  styleUrls: ['./form-builder-example.component.scss']
})
export class FormBuilderExampleComponent {
  userForm : any;



  constructor(private formBuilder: FormBuilder) {

  this.userForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', [Validators.required, Validators.minLength(10)]],
    email: ['',Validators.required, Validators.email],
    mobileNumber: ['',Validators.required, Validators.minLength(10)],
    address: this.formBuilder.group({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
} 
  get firstname() {
    return this.userForm.get('firstname');
  }
 
  get lastname() {
    return this.userForm.get('lastname');
  }

  onSubmit(){
    console.log(this.userForm.value);
    if (this.userForm.dirty && this.userForm.valid) {
      alert(
        `Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`
      );
    }
  
  }
}
