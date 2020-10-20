import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { circleExitAnimation } from '../animations';

export const pageAnimation = trigger('pageAnimation', [
  transition(':enter', [
    query('.item-background', [
      style({ transform: 'scale(0)' }),
      stagger(50, [
        animate('500ms 0s ease', style({ transform: 'none' }))
      ])
    ])
  ]),
  transition(':leave', [
    query('.item-background', [
      stagger(50, [
        animate('900ms 0s ease-in', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.1)', offset: 0.3 }),
          style({ transform: 'scale(0)', offset: 1 })
        ]))
      ])
    ])
  ])
])