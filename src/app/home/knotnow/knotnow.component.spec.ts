import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnotnowComponent } from './knotnow.component';

describe('KnotnowComponent', () => {
  let component: KnotnowComponent;
  let fixture: ComponentFixture<KnotnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnotnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnotnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
