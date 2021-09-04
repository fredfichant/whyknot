import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleKnotComponent } from './single-knot.component';

describe('SingleKnotComponent', () => {
  let component: SingleKnotComponent;
  let fixture: ComponentFixture<SingleKnotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleKnotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleKnotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
