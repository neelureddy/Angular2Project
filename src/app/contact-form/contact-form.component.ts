import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {


  constructor() { }
  contactMethods= [
    {id:1, name: 'Email'},
    {id:2, name: 'Phones'}
  ]
   log(x: any) {
     console.log(x);
   }
   submit(f: any){
     console.log(f);
   }

}
