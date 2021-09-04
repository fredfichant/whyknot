import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table15Component } from './table15.component';

describe('Table15Component', () => {
  let component: Table15Component;
  let fixture: ComponentFixture<Table15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
