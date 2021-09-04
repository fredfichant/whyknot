import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutontablesComponent } from './boutontables.component';

describe('BoutontablesComponent', () => {
  let component: BoutontablesComponent;
  let fixture: ComponentFixture<BoutontablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutontablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutontablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
