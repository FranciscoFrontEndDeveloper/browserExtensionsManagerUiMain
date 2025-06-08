import { Component, inject } from '@angular/core';
import { ButtoncompComponent } from '../buttoncomp/buttoncomp.component';
import { ButtontoggleComponent } from '../buttontoggle/buttontoggle.component';
import { ExtensionsService } from '../../services/extensions.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardextension',
  standalone: true,
  imports: [ButtoncompComponent, ButtontoggleComponent,CommonModule],
  templateUrl: './cardextension.component.html',
  styleUrl: './cardextension.component.sass',
})
export class CardextensionComponent {
  Remove: string = 'Remove';
  private extensionsService = inject(ExtensionsService);
  extensions = this.extensionsService.extensions;
}
