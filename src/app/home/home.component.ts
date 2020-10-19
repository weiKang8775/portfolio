import { animate, group, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  animations: [
    trigger('pageAnimations', [
      transition(':leave', [
        group([
          query('.background-circle', [
            animate('900ms 0s ease-in', keyframes([
              style({ transform: 'translate(-50%, -50%) scale(1)', offset: 0 }),
              style({ transform: 'translate(-50%, -50%) scale(1.1)', offset: 0.3 }),
              style({ transform: 'translate(-50%, -50%) scale(0)', offset: 1 })
            ]))
          ]),
          query('.header__textbox', [
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
