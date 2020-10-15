import { animate, animation, keyframes, style } from '@angular/animations';

export const headingAnimation = animation([
  animate(
    "500ms 0s ease-in",
    keyframes([
      style({ transform: "translate(-50%, -50%) scale(1)", offset: 0 }),
      style({
        transform: "translate(-50%, -50%) scale(1.1)",
        offset: 0.1
      }),
      // style({
      //   transform: "translate(-50%, -50%) scale(1.1)",
      //   offset: 0.2
      // }),
      style({ transform: "translate(-50%, -50%) scale(0)", offset: 1 })
    ])
  )
])