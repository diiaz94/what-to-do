import { trigger, style,transition, animate, query, stagger } from '@angular/animations';

export const enterAnimation = (
                trigger('enterState',[
                transition("* => *",[
                    query(':enter', [
                    style({transform: 'translateX(-100%)',opacity:0}),
                    stagger(100,[
                        animate(300,style({transform: 'translateX(0)',opacity:1}))
                    ])
                    ],{optional:true})
                ])
                ])
            );