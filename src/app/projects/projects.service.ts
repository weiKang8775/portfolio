import { Injectable } from "@angular/core";
import { Project } from './Project';

@Injectable({ providedIn: 'root'})
export class ProjectsService {
  private projects: Project[] =
  [
    new Project("Alpha Blog", "Project built for the purposes of learning Ruby on Rails. It is styled with Bootstrap and features RESTful routes, authentication, form validation, database associations, and functional, integration, and unit testing.", ["Ruby on Rails"], "../../../assets/images/alpha_blog.png", "https://github.com/weiKang8775/alpha-blog", "https://wk8775-alpha-blog.herokuapp.com/")
  ]
  private projectIndex: number = 0;

  getProjects(): Project[] {
    return [...this.projects];
  }

  getProject(): Project {
    this.projectIndex = this.projectIndex >= this.projects.length ? 0 : this.projectIndex;
    const project = this.projects[this.projectIndex];
    this.projectIndex++;
    return project;
  }
}