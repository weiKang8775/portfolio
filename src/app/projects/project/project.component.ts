import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: Project = new Project("Alpha Blog", "Project built for the purposes of learning Ruby on Rails. It is styled with Bootstrap and features RESTful routes, authentication, form validation, database associations, and functional, integration, and unit testing.", ["Ruby on Rails"], "../../../assets/images/alpha_blog.png", "https://github.com/weiKang8775/alpha-blog", "https://wk8775-alpha-blog.herokuapp.com/");

  constructor() { }

  ngOnInit(): void {
  }

}
