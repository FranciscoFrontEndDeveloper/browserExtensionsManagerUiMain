import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttoncomp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttoncomp.component.html',
  styleUrl: './buttoncomp.component.sass',
})
export class ButtoncompComponent {
  @Input('buttonReUse') textButton = 'textos' 
  @Input('darkModeButton') darkModeButton = true

  prueba() {
    console.group('ButtoncompComponent');
    console.log(this.darkModeButton);
    console.groupEnd();
  }
  
}
