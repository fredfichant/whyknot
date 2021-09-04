import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonknotfuturComponent } from './boutonknotfutur.component';

describe('BoutonknotfuturComponent', () => {
  let component: BoutonknotfuturComponent;
  let fixture: ComponentFixture<BoutonknotfuturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonknotfuturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonknotfuturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
