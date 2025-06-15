import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterextensService {
  private filtroSubject = new BehaviorSubject<string>('All');
  filter$ = this.filtroSubject.asObservable();

  updateFilter(valor: string) {
    this.filtroSubject.next(valor);
  }
}
