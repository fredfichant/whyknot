import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilTablesComponent } from './accueil-tables.component';

describe('AccueilTablesComponent', () => {
  let component: AccueilTablesComponent;
  let fixture: ComponentFixture<AccueilTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
