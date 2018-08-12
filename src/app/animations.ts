import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {AnimationTriggerMetadata} from '@angular/animations/src/animation_metadata';

const listStagger: AnimationTriggerMetadata = trigger('list-stagger', [
  transition('* <=> *', [
    query(':enter', [
      style({opacity: 0, transform: 'translateY(-15px)'}),
      stagger('60ms', animate('500ms ease-out', style({opacity: 1, transform: 'translateY(0)'})))
    ], {optional: true}),
    query(':leave', animate('50ms', style({opacity: 0})), {optional: true})
  ])
]);

export {listStagger};
