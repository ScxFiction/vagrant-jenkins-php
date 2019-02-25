import { Injectable } from '@angular/core';
import { Project } from '../shared/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public getProjects(): Array<Project> {
    let projects = [];
    projects.push(new Project('teste 1', new Date(), ['composer', 'npm']));
    projects.push(new Project('teste 2', new Date(), ['composer', 'npm', 'bower']));
    projects.push(new Project('teste 3', new Date(), ['composer']));
    return projects;
  }
}
