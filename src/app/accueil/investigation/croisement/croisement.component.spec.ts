import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroisementComponent } from './croisement.component';

describe('CroisementComponent', () => {
  let component: CroisementComponent;
  let fixture: ComponentFixture<CroisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CroisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
