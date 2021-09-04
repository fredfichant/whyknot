import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meta9Component } from './meta9.component';

describe('Meta9Component', () => {
  let component: Meta9Component;
  let fixture: ComponentFixture<Meta9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Meta9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Meta9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
