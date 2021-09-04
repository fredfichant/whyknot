import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutontournureComponent } from './boutontournure.component';

describe('BoutontournureComponent', () => {
  let component: BoutontournureComponent;
  let fixture: ComponentFixture<BoutontournureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutontournureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutontournureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
