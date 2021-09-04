import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReductibiliteComponent } from './reductibilite.component';

describe('ReductibiliteComponent', () => {
  let component: ReductibiliteComponent;
  let fixture: ComponentFixture<ReductibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReductibiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReductibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
