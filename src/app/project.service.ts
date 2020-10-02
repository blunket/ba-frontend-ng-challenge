import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable, of } from 'rxjs';

import * as data from './data.json';

const PROJECTS: Project[] = (data as any).default;

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    console.log(PROJECTS);
    return of(PROJECTS);
  }

}
