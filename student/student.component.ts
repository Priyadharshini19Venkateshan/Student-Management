import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {StudentData} from '../student-data';
import {StudentService} from '../student.service'


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public response: Observable<StudentData[]>;
  constructor(public service: StudentService ) { }
  ngOnInit(): void {}


  displayInfo(){ this.response=this.service.getInfo(); }
  insertInfo(){this.response=this.service.postInfo();console.log(this.response);}
  editInfo(){this.response=this.service.putInfo();console.log(this.response);}
  delInfo(){this.response=this.service.deleteInfo(); console.log(this.response);}



}
