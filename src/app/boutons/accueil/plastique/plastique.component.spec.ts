import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlastiqueComponent } from './plastique.component';

describe('PlastiqueComponent', () => {
  let component: PlastiqueComponent;
  let fixture: ComponentFixture<PlastiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlastiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlastiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
