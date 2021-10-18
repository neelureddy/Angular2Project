import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form: any;
  
  constructor(fb: FormBuilder){
    this.form= fb.group({
      name: ['', Validators.required],
      contact: fb.group({
          email: [],
          phone: []
      }),
      topics: fb.array([])
    });
  }
  
}
