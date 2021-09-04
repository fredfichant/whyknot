import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueTable7Component } from './vue-table7.component';

describe('VueTable7Component', () => {
  let component: VueTable7Component;
  let fixture: ComponentFixture<VueTable7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueTable7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueTable7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
