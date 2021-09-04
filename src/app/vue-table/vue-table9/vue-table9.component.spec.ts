import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueTable9Component } from './vue-table9.component';

describe('VueTable9Component', () => {
  let component: VueTable9Component;
  let fixture: ComponentFixture<VueTable9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueTable9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueTable9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
