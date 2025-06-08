import { Injectable, computed, signal } from '@angular/core';
import { EXTENSIONES } from '../../mockExtensions';
EXTENSIONES;
@Injectable({
  providedIn: 'root',
})
export class ExtensionsService {
  constructor() {}
  private _extensions = signal(EXTENSIONES);
  readonly extensions = this._extensions.asReadonly();
}
