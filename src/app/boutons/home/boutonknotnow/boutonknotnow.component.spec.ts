import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonknotnowComponent } from './boutonknotnow.component';

describe('BoutonknotnowComponent', () => {
  let component: BoutonknotnowComponent;
  let fixture: ComponentFixture<BoutonknotnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonknotnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonknotnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
