import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonhomotoniesComponent } from './boutonhomotonies.component';

describe('BoutonhomotoniesComponent', () => {
  let component: BoutonhomotoniesComponent;
  let fixture: ComponentFixture<BoutonhomotoniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonhomotoniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonhomotoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
