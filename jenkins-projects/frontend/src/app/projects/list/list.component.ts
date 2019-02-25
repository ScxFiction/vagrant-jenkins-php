import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/project.model';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  projects: Project[] = [];
  
  constructor(projectService: ProjectService) { 
    this.projects = projectService.getProjects();
  }

  ngOnInit() {
  }

}
