import { Injectable } from '@angular/core';
import { Project } from './project';
import * as PROJECTS from './data.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }

}
