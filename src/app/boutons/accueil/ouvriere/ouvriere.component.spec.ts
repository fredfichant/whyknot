import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvriereComponent } from './ouvriere.component';

describe('OuvriereComponent', () => {
  let component: OuvriereComponent;
  let fixture: ComponentFixture<OuvriereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuvriereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuvriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
