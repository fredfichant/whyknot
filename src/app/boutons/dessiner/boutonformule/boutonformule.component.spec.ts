import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonformuleComponent } from './boutonformule.component';

describe('BoutonformuleComponent', () => {
  let component: BoutonformuleComponent;
  let fixture: ComponentFixture<BoutonformuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonformuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonformuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
