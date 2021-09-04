import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilPlastiqueComponent } from './accueil-plastique.component';

describe('AccueilPlastiqueComponent', () => {
  let component: AccueilPlastiqueComponent;
  let fixture: ComponentFixture<AccueilPlastiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilPlastiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilPlastiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
