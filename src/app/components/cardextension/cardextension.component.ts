import { Component } from '@angular/core';
import { ButtoncompComponent } from "../buttoncomp/buttoncomp.component";
import { ButtontoggleComponent } from "../buttontoggle/buttontoggle.component";

@Component({
  selector: 'app-cardextension',
  imports: [ButtoncompComponent, ButtontoggleComponent],
  templateUrl: './cardextension.component.html',
  styleUrl: './cardextension.component.sass'
})
export class CardextensionComponent {

}
