import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonknotpastComponent } from './boutonknotpast.component';

describe('BoutonknotpastComponent', () => {
  let component: BoutonknotpastComponent;
  let fixture: ComponentFixture<BoutonknotpastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonknotpastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonknotpastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
