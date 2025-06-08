import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardextensionComponent } from './cardextension.component';

describe('CardextensionComponent', () => {
  let component: CardextensionComponent;
  let fixture: ComponentFixture<CardextensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardextensionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardextensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
