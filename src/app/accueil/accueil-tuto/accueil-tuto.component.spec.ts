import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilTutoComponent } from './accueil-tuto.component';

describe('AccueilTutoComponent', () => {
  let component: AccueilTutoComponent;
  let fixture: ComponentFixture<AccueilTutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilTutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilTutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
