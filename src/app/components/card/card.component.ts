import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() label?: string;
  @Input() img: string = ""
  @Input() description:string = ""
  @Input('employee-id') id!:number
  @Input() email:string = ""
  @Input() phone:string = ""
  @Input() salary!:number

  constructor() {}
}
