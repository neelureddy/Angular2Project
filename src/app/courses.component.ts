
import {Component} from '@angular/core';

@Component ({
    selector: 'courses',
    template: `
     <button [style.backgroundColor]="isActive ? 'blue': 'white' ">Save</button>
    `
})
export class CoursesComponent {

 constructor(){}
 isActive= false;
 

}