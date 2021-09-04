import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonspinComponent } from './boutonspin.component';

describe('BoutonspinComponent', () => {
  let component: BoutonspinComponent;
  let fixture: ComponentFixture<BoutonspinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonspinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonspinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
