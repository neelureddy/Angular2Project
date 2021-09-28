import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses!: {
    id: number;
    name: string;
  }[];
  title = 'Angular2Project';
  
  viewMode= 'somethingElse';

  onAdd(){
    this.courses.push({id:4, name: 'course4'});
  }

  onChange(course: { id: number; name: string; }){
    let index= this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  loadCourses(){
    
    this.courses= [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
    ];
  }
  trackCourse(_index: any, course: { id: any; }){
      return course ? course.id : undefined;
  }

  canSave =true;

  task= {
    title: 'Review Applications',
    assignee: {
      name: 'John Smith'
    }
  }
  courses= [];
}
