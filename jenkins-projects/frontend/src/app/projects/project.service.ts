import { Injectable } from '@angular/core';
import { Project } from '../shared/project.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  buildersChanged = new Subject();

  public getProjects(): Array<Project> {
    let projects = [];
    projects.push(new Project('teste 1', new Date(), ['composer', 'npm']));
    projects.push(new Project('teste 2', new Date(), ['composer', 'npm', 'bower']));
    projects.push(new Project('teste 3', new Date(), ['composer']));
    return projects;
  }

  public addBuilder(builder) {
    this.buildersChanged.next({name: builder, action: 'add'});
  }
  
  public removeBuilder(builder) {
    this.buildersChanged.next({name: builder, action: 'remove'});
  }
}
