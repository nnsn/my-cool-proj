import { Component } from '@angular/core';
import { DataService } from './data.service'; 
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

//Component Decorator
@Component({
  selector: 'app-root',
  //Inline template decleration
  template: `
  <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>
  `,
  styles: [`
    p {
      width:200px;
      background:lightgray;
      margin: 100px auto;
      text-align:center;
      padding:20px;
      fint-size:1.5em;
    }
  `],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),

      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({ opacity:0, transform: 'translateY(-75%)', offset: 0 }),
        style({ opacity:1, transform: 'translateY(35px)', offset: .5 }),
        style({ opacity:1, transform: 'translateY(0)', offset: 1 }),
      ]))),
    ]),
  ]
})

//Component class where various property and methods are defined
export class AppComponent {

  state: string = 'small'

  constructor(private dataService:DataService) {

  }
  
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
 