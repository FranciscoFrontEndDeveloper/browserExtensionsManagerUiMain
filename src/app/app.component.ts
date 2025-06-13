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
  darkLogoPath: string = 'assets/images/logoWhite.svg';
  lightLogoPath: string = 'assets/images/logo.svg';
  logoPath: string = 'assets/images/logoWhite.svg';
  iconMode: string = 'assets/images/icon-sun.svg';
  darkmode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.logoPath = this.darkLogoPath;
      this.iconMode = 'assets/images/icon-sun.svg';
    } else {
      this.logoPath = this.lightLogoPath;
      this.iconMode = 'assets/images/icon-moon.svg';
    }
  }
}
