import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonombreComponent } from './boutonombre.component';

describe('BoutonombreComponent', () => {
  let component: BoutonombreComponent;
  let fixture: ComponentFixture<BoutonombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
