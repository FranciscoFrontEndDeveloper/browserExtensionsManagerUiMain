import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttoncomp',
  standalone: true,
  imports: [],
  templateUrl: './buttoncomp.component.html',
  styleUrl: './buttoncomp.component.sass',
})
export class ButtoncompComponent {
  @Input('buttonReUse') textButton = 'textos'
}
