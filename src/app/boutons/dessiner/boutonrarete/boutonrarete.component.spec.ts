import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonrareteComponent } from './boutonrarete.component';

describe('BoutonrareteComponent', () => {
  let component: BoutonrareteComponent;
  let fixture: ComponentFixture<BoutonrareteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonrareteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonrareteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
