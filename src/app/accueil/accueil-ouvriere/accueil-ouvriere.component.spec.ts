import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilOuvriereComponent } from './accueil-ouvriere.component';

describe('AccueilOuvriereComponent', () => {
  let component: AccueilOuvriereComponent;
  let fixture: ComponentFixture<AccueilOuvriereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilOuvriereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilOuvriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
