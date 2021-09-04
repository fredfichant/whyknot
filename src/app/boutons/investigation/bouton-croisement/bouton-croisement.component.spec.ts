import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonCroisementComponent } from './bouton-croisement.component';

describe('BoutonCroisementComponent', () => {
  let component: BoutonCroisementComponent;
  let fixture: ComponentFixture<BoutonCroisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonCroisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonCroisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
