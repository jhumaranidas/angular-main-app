import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateformtest',
  templateUrl: './templateformtest.component.html',
  styleUrls: ['./templateformtest.component.scss']
})
export class TemplateformtestComponent implements OnInit, OnDestroy{

  constructor() { }

  submitted = false;

  cities = ['Select City', 'Mumbai', 'Kolkata', 'Banglore', 'Delhi'];

  model = {
   name: "",
   emailId: "",
   mobileNumber:"",
   address:"",
   city: this.cities[0]

  }

  onSubmit() { 
    this.submitted = true; 
    // console.log(_form.valid);
    // if(_form.valid){
    //   this.submitted = true; 
    // }
    
  
  }




















  ngOnInit() {    
  }
	// @ViewChild('f')
  // courseForm!: NgForm;

  // onSubmit(form: NgForm) {
	// console.log("Course Name is : " + form.value.courseName);
	// console.log("Course Desc is : " + form.value.courseDesc);
	// console.log("Course Amount is : " + form.value.courseAmount);    
  // }

  onClear() {
	// Now that we have access to the form via the 'ViewChild', we can access the form and clear it.
	//this.courseForm.reset();
  }

  onDelete() {
  }

  ngOnDestroy() {    
  }

}


