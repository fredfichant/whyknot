import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonclitorneComponent } from './boutonclitorne.component';

describe('BoutonclitorneComponent', () => {
  let component: BoutonclitorneComponent;
  let fixture: ComponentFixture<BoutonclitorneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonclitorneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonclitorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
