import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-default',
  templateUrl: './button-default.component.html',
  styleUrls: ['./button-default.component.scss']
})
export class ButtonDefaultComponent {
  @Input() label:string = ""
  @Input() color:string = "white-borderer"
}
