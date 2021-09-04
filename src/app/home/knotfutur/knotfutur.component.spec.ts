import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnotfuturComponent } from './knotfutur.component';

describe('KnotfuturComponent', () => {
  let component: KnotfuturComponent;
  let fixture: ComponentFixture<KnotfuturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnotfuturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnotfuturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
