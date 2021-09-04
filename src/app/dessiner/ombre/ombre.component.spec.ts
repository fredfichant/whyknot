import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmbreComponent } from './ombre.component';

describe('OmbreComponent', () => {
  let component: OmbreComponent;
  let fixture: ComponentFixture<OmbreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmbreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmbreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
