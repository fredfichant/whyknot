import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonportanceComponent } from './boutonportance.component';

describe('BoutonportanceComponent', () => {
  let component: BoutonportanceComponent;
  let fixture: ComponentFixture<BoutonportanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonportanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonportanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
