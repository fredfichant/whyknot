import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutongrapheComponent } from './boutongraphe.component';

describe('BoutongrapheComponent', () => {
  let component: BoutongrapheComponent;
  let fixture: ComponentFixture<BoutongrapheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutongrapheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutongrapheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
