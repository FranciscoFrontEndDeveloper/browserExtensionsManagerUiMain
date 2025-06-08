import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardextensionComponent } from "./components/cardextension/cardextension.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardextensionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'browserExtensionsManagerUiMain';
}
