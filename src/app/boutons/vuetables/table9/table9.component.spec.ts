import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table9Component } from './table9.component';

describe('Table9Component', () => {
  let component: Table9Component;
  let fixture: ComponentFixture<Table9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
