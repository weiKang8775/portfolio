import { animate, group, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { circleEnterAnimation, circleExitAnimation } from '../animations';

@Component({
  selector: 'app-home',
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        group([
          circleEnterAnimation,
          query('.home__textbox', [
            style({
              opacity: 0,
              transform: 'translate(-50%, -50%) translateX(-100vw)'
            }),
            animate('900ms 0s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translate(-50%, -50%)' }))
          ])
        ])
      ]),
      transition(':leave', [
        group([
          circleExitAnimation,
          query('.home__textbox', [
            animate('900ms 0s ease-in', keyframes([
              style({ transform: 'translate(-50%, -50%) scale(1)', offset: 0 }),
              style({ transform: 'translate(-50%, -50%) translateX(10rem) scale(1.1)', offset: 0.3 }),
              style({ transform: 'translate(-50%, -50%) translateX(-100vw) scale(0)', offset: 1 }),
            ]))
          ])
        ]),
      ])
    ])
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('@pageAnimations') public animatePage = true;

  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
