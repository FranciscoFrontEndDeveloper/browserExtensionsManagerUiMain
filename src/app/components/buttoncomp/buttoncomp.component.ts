import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FilterextensService } from '../../services/filterextens.service';

@Component({
  selector: 'app-buttoncomp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttoncomp.component.html',
  styleUrl: './buttoncomp.component.sass',
})
export class ButtoncompComponent {
  @Input('darkModeButton') darkModeButton = true;
  @Input('buttonReUse') textButton = 'textos';
  @Input('tipo') tipo: 'All' | 'Active' | 'Inactive' = 'All';
  @Input('label') label = '';
  constructor(private filterextensService: FilterextensService) {}
  filterExtends(valueButton: string) {
    this.filterextensService.updateFilter(this.textButton);
  }
}
