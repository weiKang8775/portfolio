import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { pageAnimation } from './skills/skills-animations';

const pageTransitions = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),

  query(':enter', [
    style({ opacity: 0 })
  ]),

  query(':leave', animateChild()),

  query(':enter', [
    animate('300ms ease-out', style({ opacity: 1 }))
  ]),

  query(':enter', animateChild()),
];

export const routeAnimation = trigger('routeAnimations', [
  transition('HomePage => *', pageTransitions),
  transition('AboutPage => *', pageTransitions),
  transition('SkillsPage => *', pageTransitions),
  transition('ContactPage => *', pageTransitions)
]);

export const circleEnterAnimation = query('.background-circle', [
  style({ transform: 'translate(-50%, -50%) scale(0)'}),
  animate('900ms 100ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translate(-50%, -50%) scale(1)'}))
]);

export const circleExitAnimation = query('.background-circle', [
  animate('900ms 0s ease-in', keyframes([
    style({ transform: 'translate(-50%, -50%) scale(1)', offset: 0 }),
    style({ transform: 'translate(-50%, -50%) scale(1.1)', offset: 0.3 }),
    style({ transform: 'translate(-50%, -50%) scale(0)', offset: 1 })
  ]))
]);

export const navAnimation = trigger('toggleNav', [


  state('open', style({
    opacity: 1,
    transform: 'translate(-50%, -50%)'
  })),


  state('closed', style({
    opacity: 0,
    transform: 'translate(-50%, 50%) translateX(50rem)'
  })),


  transition('open => closed', [
    query('.navigation__item', [
      stagger(-100, [
        animate('1000ms 0s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0, transform: 'translate(-50%, 50%) translateX(50rem)' }))
      ])
    ])
  ]),


  transition('closed => open', [
    query('.navigation__item', [
      stagger(-100, [
        animate('1000ms 0s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0, transform: 'translate(-50%, 50%)' }))
      ])
    ])
  ])
]);