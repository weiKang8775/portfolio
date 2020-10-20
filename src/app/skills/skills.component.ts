import { Component, HostBinding, OnInit } from '@angular/core';
import { pageAnimation } from './skills-animations';

@Component({
  selector: 'app-skills',
  animations: [pageAnimation],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    "Java",
    "Python",
    "C",
    "C++",
    "HTML",
    "CSS",
    "SCSS",
    "Angular",
    "ReactJs",
    "Node.js",
    "Express.js",
    "Ruby on Rails",
  ];

  @HostBinding('@pageAnimation') public animatePage = true;

  constructor() { }

  ngOnInit(): void {
  }

}
