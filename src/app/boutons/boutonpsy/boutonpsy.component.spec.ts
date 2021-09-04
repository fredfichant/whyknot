import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonpsyComponent } from './boutonpsy.component';

describe('BoutonpsyComponent', () => {
  let component: BoutonpsyComponent;
  let fixture: ComponentFixture<BoutonpsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonpsyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonpsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
