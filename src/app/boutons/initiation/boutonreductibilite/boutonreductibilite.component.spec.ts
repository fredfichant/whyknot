import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonreductibiliteComponent } from './boutonreductibilite.component';

describe('BoutonreductibiliteComponent', () => {
  let component: BoutonreductibiliteComponent;
  let fixture: ComponentFixture<BoutonreductibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonreductibiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonreductibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
