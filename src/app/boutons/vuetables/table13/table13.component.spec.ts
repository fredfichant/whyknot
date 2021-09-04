import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table13Component } from './table13.component';

describe('Table13Component', () => {
  let component: Table13Component;
  let fixture: ComponentFixture<Table13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
