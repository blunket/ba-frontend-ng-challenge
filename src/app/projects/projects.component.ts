import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  displayedColumns = ['expand_toggle', 'id', 'title', 'status', 'start_date', 'active', 'assignee', 'percent_complete'];
  expandedProject: Project | null;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  toggleProjectState(project: Project): void {
    // the active status is given as a string in data.json
    const isActive = project.active === 'true' ? true : false;
    project.active = `${!isActive}`;
  }
}
