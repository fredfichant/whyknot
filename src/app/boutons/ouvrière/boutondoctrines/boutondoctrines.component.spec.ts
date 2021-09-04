import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutondoctrinesComponent } from './boutondoctrines.component';

describe('BoutondoctrinesComponent', () => {
  let component: BoutondoctrinesComponent;
  let fixture: ComponentFixture<BoutondoctrinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutondoctrinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutondoctrinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
