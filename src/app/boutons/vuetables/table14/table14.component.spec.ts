import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table14Component } from './table14.component';

describe('Table14Component', () => {
  let component: Table14Component;
  let fixture: ComponentFixture<Table14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
