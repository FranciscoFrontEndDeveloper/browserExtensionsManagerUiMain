import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttontoggle',
  imports: [],
  templateUrl: './buttontoggle.component.html',
  styleUrl: './buttontoggle.component.sass',
})
export class ButtontoggleComponent {
  @Input('toggleCheck') toggleCheck: boolean = false;
}
