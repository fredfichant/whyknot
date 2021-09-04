import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table11Component } from './table11.component';

describe('Table11Component', () => {
  let component: Table11Component;
  let fixture: ComponentFixture<Table11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
