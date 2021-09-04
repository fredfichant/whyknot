import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutontresseComponent } from './boutontresse.component';

describe('BoutontresseComponent', () => {
  let component: BoutontresseComponent;
  let fixture: ComponentFixture<BoutontresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutontresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutontresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
