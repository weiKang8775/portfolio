import { animate, keyframes, query, style, transition, trigger, group } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: 
  [
    trigger('pageAnimation', [
      transition(':enter', [
        group([
          query('.background-circle', [
            style({ transform: 'translate(-50%, -50%) scale(0)'}),
            animate('900ms 100ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translate(-50%, -50%) scale(1)'}))
          ]),
          query('.heading-textbox', [
            style({
               opacity: 0,
               transform: 'translate(-20rem, -20rem) scale(0)'
            }),
            animate('900ms 100ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none'}))
          ])
        ])
      ])
    ])
  ],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @HostBinding('@pageAnimation') public animatePage = true;

  constructor() { }

  ngOnInit(): void {
  }

}
