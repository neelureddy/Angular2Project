
import {Component} from '@angular/core';

@Component ({
    selector: 'courses',
    template: `
    {{course.title | uppercase }} </br>
    {{course.students| lowercase}}</br>
    {{course.rating | number: '2.1-1'}}</br>
    {{course.price | currency: AUD:true: '3.2-2'}}</br>
    {{course.releaseDate| date: shortDate}}`

})
export class CoursesComponent {
    course={
        title: "The Complete Angular Course",
        rating: 4.975,
        students: 30123,
        price: 190.95,
        releasedate: new Date(2021, 09, 09)
    }
 
}

