import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmasComponent } from './amas.component';

describe('AmasComponent', () => {
  let component: AmasComponent;
  let fixture: ComponentFixture<AmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
