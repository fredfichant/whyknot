import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonTransitionComponent } from './bouton-transition.component';

describe('BoutonTransitionComponent', () => {
  let component: BoutonTransitionComponent;
  let fixture: ComponentFixture<BoutonTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
