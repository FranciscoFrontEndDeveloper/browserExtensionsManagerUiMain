import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontoggleComponent } from './buttontoggle.component';

describe('ButtontoggleComponent', () => {
  let component: ButtontoggleComponent;
  let fixture: ComponentFixture<ButtontoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtontoggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtontoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
