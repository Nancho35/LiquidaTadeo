
import {
    trigger,
    animate,
    transition,
    style,
    query,
    group
  } from '@angular/animations';

  export const slider =
  trigger('routeAnimations', [
    transition('* => *', slideTo('right') )
  ]);

  function slideTo(direction) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%'
        })
      ], {optional: true}),
      query(':enter', [
        style({ [direction]: '-100%'})
      ],{optional: true}),
      group([
        query(':leave', [
          animate('600ms ease', style({ [direction]: '100%'}))
        ], {optional: true}),
        query(':enter', [
          animate('600ms ease', style({ [direction]: '0%'}))
        ],{optional: true})
      ]),
      // Normalize the page style... Might not be necessary
  
      // Required only if you have child animations on the page
      // query(':leave', animateChild()),
      // query(':enter', animateChild()),
    ];
  }
 