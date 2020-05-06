import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StudentData} from './student-data';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  public getInfo():Observable<StudentData[]>
  {
    return this.http.get<StudentData[]>
           ('http://localhost:3000/student');
  }

  public postInfo():Observable<StudentData[]>
  {
    return this.http.post<StudentData[]>
           ('http://localhost:3000/student',
           { 
            "stud_name": "vidhya",
            "stud_id": "004",
            "stud_grade": "A",
            "stud_course": "BE",
            "stud_address": "tiruvallur",
            "ph_no": 9876543210 }
           );
  }

  public putInfo():Observable<StudentData[]>
  {
    return this.http.put<StudentData[]>
           ('http://localhost:3000/student/004',
           { 
            "stud_name": "vidhyalakshmi",
            "stud_id": "004",
            "stud_grade": "A",
            "stud_course": "BE",
            "stud_address": "tiruvallur",
            "ph_no": 9876543210 }
           );
  }

  public deleteInfo():Observable<StudentData[]>
  {
    return this.http.delete<StudentData[]>
           ('http://localhost:3000/student/004');
  }







}
