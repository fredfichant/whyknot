import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomotoniesComponent } from './homotonies.component';

describe('HomotoniesComponent', () => {
  let component: HomotoniesComponent;
  let fixture: ComponentFixture<HomotoniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomotoniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomotoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
