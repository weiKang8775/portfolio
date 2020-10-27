import { transition, trigger, group, query, style, animate } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { circleEnterAnimation, circleExitAnimation } from '../animations';
import { Project } from './Project';

@Component({
  selector: 'app-projects',
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        group([
          circleEnterAnimation,
          query('.project-display__wrapper', [
            style({
              opacity: 0,
              transform: 'scale(0)'
            }),
            animate('1200ms 0s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ]),
      transition(':leave', [
        group([
          circleExitAnimation,
          query('.project-display__wrapper', [
            animate('1200ms 0s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0, transform: 'scale(0)' }))
          ])
        ])
      ])
    ])
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[];
  currentProject: Project;
  projectIndex: number;
  @HostBinding('@pageAnimation') animatePage = true;
  useSwipe: boolean;
  swipeSub: Subscription;

  constructor(private breakPointObserver: BreakpointObserver) {
    this.projects = [];
    this.projectIndex = 0;
    this.useSwipe = false;
  }

  ngOnInit(): void {
    this.projects.push(new Project("Alpha Blog", "Project built for the purposes of learning Ruby on Rails. It is styled with Bootstrap and features RESTful routes, authentication, form validation, database associations, and functional, integration, and unit testing.", ["Ruby on Rails"], "../../../assets/images/alpha_blog.png", "https://github.com/weiKang8775/alpha-blog", "https://wk8775-alpha-blog.herokuapp.com/"));
    this.projects.push(new Project("Natours", "Project built for the purposes of learning HTML and SCSS. It features animations that are coded entirely in SCSS.", ["HTML", "SCSS"], "../../../assets/images/Natours.png", "https://github.com/weiKang8775/Natours"));
    this.projects.push(new Project("Course Registration App", "Final project for a second year software course. It features Java GUI, MVC, multi-threading, and client server architecture. It also uses a MySQL database to store data.", ["Java", "MySQL"], "../../../assets/images/CourseRegistrationApp.png", "https://github.com/weiKang8775/CourseRegistrationApp/tree/master/ENSF409Project"));
    this.currentProject = this.projects[0];
    this. swipeSub = this.breakPointObserver.observe('(max-width: 800px)').subscribe(result => {
      this.useSwipe = result.matches;
    })
  }

  ngOnDestroy(): void {
    this.swipeSub.unsubscribe();
  }

  getNextProject() {
    this.projectIndex = this.projectIndex + 1 >= this.projects.length ? 0 : this.projectIndex + 1;
    this.currentProject = this.projects[this.projectIndex];
  }

  getPrevProject() {
    this.projectIndex = this.projectIndex - 1 < 0 ? this.projects.length - 1 : this.projectIndex - 1;
    this.currentProject = this.projects[this.projectIndex];
  }

  testTap() {
    console.log("tap");
  }
}
