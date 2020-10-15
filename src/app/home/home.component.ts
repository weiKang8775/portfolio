import { trigger, state, style, transition, animate, keyframes, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { headingAnimation } from './headerAnimation';

@Component({
  selector: 'app-home',
  animations: [
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          height: "150vw",
          width: "150vw"
        })
      ),
      state(
        "closed",
        style({
          height: "0",
          width: "0"
        })
      ),
      transition("open => closed", [useAnimation(headingAnimation)]),
      transition("closed => open", [animate("0.5s")])
    ])
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
