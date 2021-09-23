
import {Component} from '@angular/core';

@Component ({
    selector: 'courses',
    template: `
    <div (click)= "onDivClicked()">
    <button [style.backgroundColor]="isActive ? 'blue': 'white' ">Save</button>
    <button (click)= "onSave($event)">Hit Click</button>
    </div>`
})
export class CoursesComponent {

 constructor(){}
 isActive= true;

 onDivClicked(){
     console.log("Div was clicked");
 }
 
onSave($event: any){

    $event.stopPropogation();
    console.log("Button was clicked", $event);
    }
}

