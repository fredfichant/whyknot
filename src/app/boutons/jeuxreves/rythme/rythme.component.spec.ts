import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RythmeComponent } from './rythme.component';

describe('RythmeComponent', () => {
  let component: RythmeComponent;
  let fixture: ComponentFixture<RythmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RythmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RythmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
