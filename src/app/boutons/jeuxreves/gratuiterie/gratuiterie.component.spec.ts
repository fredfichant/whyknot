import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratuiterieComponent } from './gratuiterie.component';

describe('GratuiterieComponent', () => {
  let component: GratuiterieComponent;
  let fixture: ComponentFixture<GratuiterieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratuiterieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratuiterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
