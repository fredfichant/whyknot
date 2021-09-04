import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueTable8Component } from './vue-table8.component';

describe('VueTable8Component', () => {
  let component: VueTable8Component;
  let fixture: ComponentFixture<VueTable8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueTable8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueTable8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
