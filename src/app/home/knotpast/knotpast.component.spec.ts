import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnotpastComponent } from './knotpast.component';

describe('KnotpastComponent', () => {
  let component: KnotpastComponent;
  let fixture: ComponentFixture<KnotpastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnotpastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnotpastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
