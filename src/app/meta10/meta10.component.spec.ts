import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meta10Component } from './meta10.component';

describe('Meta10Component', () => {
  let component: Meta10Component;
  let fixture: ComponentFixture<Meta10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Meta10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Meta10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
