import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonapeComponent } from './boutonape.component';

describe('BoutonapeComponent', () => {
  let component: BoutonapeComponent;
  let fixture: ComponentFixture<BoutonapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
