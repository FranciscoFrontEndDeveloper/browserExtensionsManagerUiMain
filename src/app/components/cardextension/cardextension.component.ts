import { Component, inject, Input, OnDestroy } from '@angular/core';
import { ButtoncompComponent } from '../buttoncomp/buttoncomp.component';
import { ButtontoggleComponent } from '../buttontoggle/buttontoggle.component';
import { ExtensionsService } from '../../services/extensions.service';
import { CommonModule } from '@angular/common';
import { FilterextensService } from '../../services/filterextens.service';
import { Subscription } from 'rxjs';
import { EXTENSIONES } from '../../../mockExtensions';

@Component({
  selector: 'app-cardextension',
  standalone: true,
  imports: [ButtoncompComponent, ButtontoggleComponent, CommonModule],
  templateUrl: './cardextension.component.html',
  styleUrl: './cardextension.component.sass',
})
export class CardextensionComponent implements OnDestroy {
  private extensionsService = inject(ExtensionsService);
  @Input('mainMode') mainMode: boolean = true;
  Remove: string = 'Remove';
  extensions = this.extensionsService.extensions;
  extensiones = EXTENSIONES;
  extensionesFiltradas = EXTENSIONES;
  private sub!: Subscription;

  constructor(private filterextensService: FilterextensService) {
    this.sub = this.filterextensService.filter$.subscribe((filtro) =>
      this.filterState(filtro)
    );
  }
  filterState(tipo: string) {
    if (tipo === 'All') {
      this.extensionesFiltradas = [...EXTENSIONES];
    } else if (tipo === 'Active') {
      this.extensionesFiltradas = this.extensiones.filter((e) => e.active);
    } else if (tipo === 'Inactive') {
      this.extensionesFiltradas = this.extensiones.filter((e) => !e.active);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  removeExten(index: number) {
    this.extensionesFiltradas.splice(index,1);
  }
}
