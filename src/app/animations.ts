import { trigger, transition, style, query, animateChild, group, animate, useAnimation, stagger } from "@angular/animations";
import {
    moveFromLeftFade,
    moveFromRightFade,
    slide,
    rotateCarouselToRight,
    moveFromRight,
    rotateCarouselToLeft,
    moveFromTop,
    rotateFlipToLeft,
    fromRightEasing,
    scaleDownFromRight,
    rotateCarouselToTop,
    moveFromLeft,
    scaleDownFromBottom,
    scaleDownFromTop,
    moveFromTopFade,
  } from 'ngx-router-animations';


  export const slideAnimate = trigger('slide' , [

    transition('login => signup' , useAnimation(moveFromRight)),
    transition('signup => login' , useAnimation(moveFromLeft)),
    transition('* => login' , useAnimation(moveFromRight)),
    transition('login => home' , useAnimation(moveFromLeft)),
    transition('* => settings' , useAnimation(moveFromRight)),
    transition('* => password' , useAnimation(moveFromRight)),
    transition('* => clinics' , useAnimation(moveFromRight)),
    transition('ads => doctor-ad' , useAnimation(moveFromRight)),
    transition('doctor-ad => ads' , useAnimation(moveFromLeft)),
    transition('* => patient' , useAnimation(moveFromTopFade)),
    transition('* => appointments' , useAnimation(moveFromRight)),
    transition('* => prescriptions' , useAnimation(moveFromRight)),
    transition('* => records' , useAnimation(moveFromRight)),
    transition('* => info' , useAnimation(moveFromRight)),


  ])



  export const show =   

    trigger('show', [
      transition('* => *', [ 
        query(':leave', [
          stagger(100, [
            animate('200ms' , style({ transform : 'scale(0)' , opacity : 0}))
          ])
        ] , {optional : true}),
        query(':enter', [
          style({ transform : 'scale(0)' , opacity : 0}),
          stagger(100, [
            animate('300ms' , style({ transform : 'scale(1)' , opacity : 1}))
          ])
        ], {optional : true})
      ])
    ])
  
  