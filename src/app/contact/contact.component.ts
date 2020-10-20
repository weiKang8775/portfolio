import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { circleEnterAnimation, circleExitAnimation } from '../animations';

@Component({
  selector: 'app-contact',
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        group([
          circleEnterAnimation,
          query('.heading-textbox', [
            style({
               opacity: 0,
               transform: 'scale(0)'
            }),
            animate('900ms 100ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none'}))
          ])
        ])
      ]),
      transition(':leave', [
        group([
          query('.heading-textbox', [
            style({ transformOrigin: 'center'}),
            animate('500ms 0s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0 }))
          ]),
          circleExitAnimation
        ])
      ])
    ])
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @HostBinding('@pageAnimation') public animatePage = true;

  constructor() { }

  ngOnInit(): void {
  }

}
