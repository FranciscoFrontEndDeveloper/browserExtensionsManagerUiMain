import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardextensionComponent } from './components/cardextension/cardextension.component';
import { ButtoncompComponent } from './components/buttoncomp/buttoncomp.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CardextensionComponent,
    ButtoncompComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'browserExtensionsManagerUiMain';
  All: string = 'All';
  Active: string = 'Active';
  Inactive: string = 'Inactive';
  isDarkMode: boolean = true;
  darkmode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
