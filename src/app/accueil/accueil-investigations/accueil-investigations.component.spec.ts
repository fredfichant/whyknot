import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilInvestigationsComponent } from './accueil-investigations.component';

describe('AccueilInvestigationsComponent', () => {
  let component: AccueilInvestigationsComponent;
  let fixture: ComponentFixture<AccueilInvestigationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilInvestigationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilInvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
