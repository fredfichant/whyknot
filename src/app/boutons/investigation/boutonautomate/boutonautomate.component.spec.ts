import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonautomateComponent } from './boutonautomate.component';

describe('BoutonautomateComponent', () => {
  let component: BoutonautomateComponent;
  let fixture: ComponentFixture<BoutonautomateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonautomateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonautomateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
