import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';

import { TASKS } from 'src/app/mock-data';

import { Task} from 'src/app/Task';

import {HttpClient,HttpHeaders} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }


  getTasks(): Observable<Task[]> {

    const tasks = of(TASKS);

      return this.http.get<Task[]>(this.apiUrl);
  }
}
