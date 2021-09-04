import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueTable6Component } from './vue-table6.component';

describe('VueTable6Component', () => {
  let component: VueTable6Component;
  let fixture: ComponentFixture<VueTable6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueTable6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueTable6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
