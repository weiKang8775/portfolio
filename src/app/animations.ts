import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger
} from "@angular/animations";

export const slideInAnimation =   trigger('routeAnimations', [
  transition('HomePage => *', [

    // Reset
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
    // [
    //   group([
    //     query('.background-circle', [
    //       animate('900ms 0s ease-in', keyframes([
    //         style({ transform: 'translate(-50%, -50%) scale(1)', offset: 0 }),
    //         style({ transform: 'translate(-50%, -50%) scale(1.1)', offset: 0.3 }),
    //         style({ transform: 'translate(-50%, -50%) scale(0)', offset: 1 })
    //       ]))
    //     ]),
    //     query('.header__textbox', [
    //       animate('900ms 0s ease-in', keyframes([
    //         style({ transform: 'translate(-50%, -50%) scale(1)', offset: 0 }),
    //         style({ transform: 'translate(-50%, -50%) translateX(10rem) scale(1.1)', offset: 0.3 }),
    //         style({ transform: 'translate(-50%, -50%) translateX(-100vw) scale(0)', offset: 1 }),
    //       ]))
    //     ]),
    //     query('nav', [
    //       animate('500ms 0s ease-in', style({ opacity: 0 }))
    //     ])
    //   ])
    // ]),


    query(':enter', [
      animate('300ms ease-out', style({ opacity: 1 }))
    ]),


    query(':enter', animateChild()),
  ])
]);