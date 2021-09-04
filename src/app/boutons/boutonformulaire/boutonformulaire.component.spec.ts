import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonformulaireComponent } from './boutonformulaire.component';

describe('BoutonformulaireComponent', () => {
  let component: BoutonformulaireComponent;
  let fixture: ComponentFixture<BoutonformulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonformulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonformulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
